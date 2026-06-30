import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = 'contact@duoadv.com';
const FROM = 'DUO Website <noreply@duoadv.com>';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { mode } = body;

  if (mode === 'brief') {
    const { name, company, email, projectTypes, budget, timeline, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;margin:0 0 24px">New project brief from ${name}</h2>
      <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
        <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
        ${projectTypes?.length ? `<tr><td style="padding:8px 0;color:#888">Project type</td><td style="padding:8px 0">${projectTypes.join(', ')}</td></tr>` : ''}
        ${budget ? `<tr><td style="padding:8px 0;color:#888">Budget</td><td style="padding:8px 0">${budget}</td></tr>` : ''}
        ${timeline ? `<tr><td style="padding:8px 0;color:#888">Timeline</td><td style="padding:8px 0">${timeline}</td></tr>` : ''}
      </table>
      ${message ? `<hr style="margin:24px 0;border:none;border-top:1px solid #eee"/><p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${message}</p>` : ''}
    `;

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New brief: ${name}${company ? ` — ${company}` : ''}`,
      html,
    });

  } else if (mode === 'prompt') {
    const { description, email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;margin:0 0 24px">New project description</h2>
      <p style="font-family:sans-serif;font-size:15px;color:#888;margin:0 0 8px">Reply to: <a href="mailto:${email}">${email}</a></p>
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
      <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${description}</p>
    `;

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New project description — ${email}`,
      html,
    });

  } else {
    return NextResponse.json({ error: 'Invalid mode.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
