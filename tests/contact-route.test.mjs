import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { after, beforeEach, test } from 'node:test';
import ts from 'typescript';

// Run the actual route with its existing dependencies; replace only outbound fetch.
const require = createRequire(import.meta.url);
const source = await readFile(new URL('../app/api/contact/route.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
  .replaceAll("'next/server'", JSON.stringify(pathToFileURL(require.resolve('next/server.js')).href))
  .replaceAll("'resend'", JSON.stringify(pathToFileURL(require.resolve('resend')).href));
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const originalFetch = globalThis.fetch;
const originalKey = process.env.RESEND_API_KEY;
let requests;
let provider;
beforeEach(() => {
  requests = [];
  process.env.RESEND_API_KEY = 're_test_only';
  provider = () => Response.json({ id: 'test-email-id' });
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), 'https://api.resend.com/emails');
    assert.equal(options.method, 'POST');
    requests.push(JSON.parse(options.body));
    return provider();
  };
});
after(() => {
  globalThis.fetch = originalFetch;
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
});
const submit = body => POST(new Request('http://localhost/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }));
const brief = { mode: 'brief', name: 'Test User', email: 'test@example.com', message: 'Test enquiry' };

test('both existing form modes deliver to the intended inbox with reply-to', async () => {
  for (const body of [brief, { mode: 'prompt', email: brief.email, description: 'Test description' }]) {
    const response = await submit(body);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
  }
  assert.equal(requests.length, 2);
  for (const request of requests) {
    assert.equal(request.to, 'contact@duoadv.com');
    assert.equal(request.reply_to, brief.email);
  }
});
test('provider rejection does not report success', async () => {
  provider = () => Response.json({ name: 'validation_error', message: 'Rejected' }, { status: 403 });
  const response = await submit(brief);
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, undefined);
});
test('network failure does not report success', async () => {
  provider = () => { throw new Error('offline'); };
  assert.equal((await submit(brief)).status, 502);
});
test('missing provider message ID does not report success', async () => {
  provider = () => Response.json({});
  assert.equal((await submit(brief)).status, 502);
});
test('missing credentials fail safely without contacting provider', async () => {
  delete process.env.RESEND_API_KEY;
  assert.equal((await submit(brief)).status, 503);
  assert.equal(requests.length, 0);
});
test('invalid bodies and malformed fields never contact provider', async () => {
  for (const body of [null, [], 1, {}, { ...brief, email: 'invalid' }, { ...brief, name: '   ' }, { ...brief, projectTypes: 'wrong' }, { ...brief, projectTypes: [{}] }, { ...brief, message: 'x'.repeat(10001) }]) {
    assert.equal((await submit(body)).status, 400);
  }
  assert.equal((await POST(new Request('http://localhost/api/contact', { method: 'POST', body: '{' }))).status, 400);
  assert.equal(requests.length, 0);
});
test('enquiry content is escaped in the notification HTML', async () => {
  assert.equal((await submit({ ...brief, name: '<script>test</script>', message: '<img src=x onerror=alert(1)>', projectTypes: ['<b>custom</b>'] })).status, 200);
  assert.ok(requests[0].html.includes('&lt;script&gt;'));
  assert.ok(requests[0].html.includes('&lt;img'));
  assert.ok(!requests[0].html.includes('<script>'));
});
