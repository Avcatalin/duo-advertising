import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = 'contact@duoadv.com';
const FROM = 'DUO Website <noreply@duoadv.com>';
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]!));

async function deliver(email: string, subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('Contact delivery unavailable: RESEND_API_KEY is missing.');
    return NextResponse.json({ error: 'Unable to send your message. Please email contact@duoadv.com.' }, { status: 503 });
  }
  try {
    const { data, error } = await new Resend(key).emails.send({ from: FROM, to: TO, replyTo: email, subject, html });
    if (error || !data?.id) {
      // Log the error category, never enquiry content or credentials.
      console.error('Contact delivery rejected:', error?.name ?? 'missing_email_id');
      return NextResponse.json({ error: 'Your message could not be sent. Please try again or email contact@duoadv.com.' }, { status: 502 });
    }
    // Accepted by Resend is not a guarantee of delivery to the inbox.
    console.info('Contact email accepted:', data.id);
    return NextResponse.json({ ok: true });
  } catch {
    console.error('Contact delivery failed: email provider request failed.');
    return NextResponse.json({ error: 'Your message could not be sent. Please try again or email contact@duoadv.com.' }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const { mode } = body;
  if (mode !== 'brief' && mode !== 'prompt') {
    return NextResponse.json({ error: 'Invalid mode.' }, { status: 400 });
  }
  const fields = ['name', 'company', 'email', 'budget', 'timeline', 'message', 'description'];
  if (fields.some(field => body[field] !== undefined && (typeof body[field] !== 'string' || body[field].length > (field === 'message' || field === 'description' ? 10000 : 254))) ||
      (body.projectTypes !== undefined && (!Array.isArray(body.projectTypes) || body.projectTypes.length > 20 || body.projectTypes.some((type: unknown) => typeof type !== 'string' || type.length > 100)))) {
    return NextResponse.json({ error: 'Invalid form fields.' }, { status: 400 });
  }
  const email = (body.email ?? '').trim();
  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  const safeEmail = escapeHtml(email);

  if (mode === 'brief') {
    const rawName = (body.name ?? '').trim();
    const rawCompany = (body.company ?? '').trim();
    const name = escapeHtml(rawName);
    const company = escapeHtml(rawCompany);
    const projectTypes = (body.projectTypes ?? []).map(escapeHtml);
    const budget = escapeHtml(body.budget ?? '');
    const timeline = escapeHtml(body.timeline ?? '');
    const message = escapeHtml(body.message ?? '');

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;margin:0 0 24px">New project brief from ${name}</h2>
      <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
        <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        ${projectTypes?.length ? `<tr><td style="padding:8px 0;color:#888">Project type</td><td style="padding:8px 0">${projectTypes.join(', ')}</td></tr>` : ''}
        ${budget ? `<tr><td style="padding:8px 0;color:#888">Budget</td><td style="padding:8px 0">${budget}</td></tr>` : ''}
        ${timeline ? `<tr><td style="padding:8px 0;color:#888">Timeline</td><td style="padding:8px 0">${timeline}</td></tr>` : ''}
      </table>
      ${message ? `<hr style="margin:24px 0;border:none;border-top:1px solid #eee"/><p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${message}</p>` : ''}
    `;

    return deliver(email, `New brief: ${rawName}${rawCompany ? ` — ${rawCompany}` : ''}`.replace(/[\r\n]/g, ' '), html);

  } else if (mode === 'prompt') {
    const description = escapeHtml(body.description ?? '');

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;margin:0 0 24px">New project description</h2>
      <p style="font-family:sans-serif;font-size:15px;color:#888;margin:0 0 8px">Reply to: <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
      <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${description}</p>
    `;

    return deliver(email, `New project description — ${email}`, html);

  } else {
    return NextResponse.json({ error: 'Invalid mode.' }, { status: 400 });
  }
}
