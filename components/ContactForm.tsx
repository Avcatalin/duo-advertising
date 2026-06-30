'use client';

import { useState } from 'react';

const PROJECT_TYPES = [
  'New website',
  'Redesign',
  'E‑commerce',
  'HubSpot CRM/CMS',
  'Figma design',
  'Ongoing retainer',
];

function Arr() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactForm() {
  const [mode, setMode] = useState<'brief' | 'prompt'>('brief');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // brief fields
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');

  // prompt fields
  const [description, setDescription] = useState('');
  const [promptEmail, setPromptEmail] = useState('');

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function switchMode(next: 'brief' | 'prompt') {
    setMode(next);
    setSubmitted(false);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload =
      mode === 'brief'
        ? { mode, name, company, email, projectTypes: selectedTypes, budget, timeline, message }
        : { mode, description, email: promptEmail };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-card">
      {/* Tab toggle */}
      <div className="form-tabs">
        <button
          className={`form-tab${mode === 'brief' ? ' is-on' : ''}`}
          onClick={() => switchMode('brief')}
        >
          <span className="mono small">01</span> Project brief
        </button>
        <button
          className={`form-tab${mode === 'prompt' ? ' is-on' : ''}`}
          onClick={() => switchMode('prompt')}
        >
          <span className="mono small">02</span> Just describe it
        </button>
      </div>

      {submitted ? (
        <div className="form-success">
          <div className="success-mark">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="var(--orange)" strokeWidth="1.5" />
              <path d="M16 24l6 6 12-14" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="h3" style={{ marginTop: '24px' }}>Got it.</h3>
          <p className="muted" style={{ marginTop: '8px' }}>
            We&apos;ve received your message and will respond within two hours during EET business hours.
            In the meantime, check{' '}
            <a href="/process" style={{ color: 'var(--orange)', borderBottom: '1px solid currentColor' }}>
              our process
            </a>.
          </p>
        </div>
      ) : mode === 'brief' ? (
        <form className="form-body" noValidate onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                placeholder="First and last name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="field" style={{ marginTop: '20px' }}>
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              type="email"
              placeholder="email@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field" style={{ marginTop: '28px' }}>
            <label>Project type — pick all that apply</label>
            <div className="chip-row" style={{ marginTop: '6px' }}>
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`chip${selectedTypes.includes(type) ? ' is-on' : ''}`}
                  onClick={() => toggleType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: '28px' }}>
            <div className="field">
              <label htmlFor="budget">Budget range</label>
              <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">—</option>
                <option>&lt; €5k</option>
                <option>€5k – €10k</option>
                <option>€10k – €30k</option>
                <option>€30k+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                <option value="">—</option>
                <option>ASAP</option>
                <option>Within 1 month</option>
                <option>1–3 months out</option>
                <option>6–12 months out</option>
                <option>Just exploring</option>
              </select>
            </div>
          </div>

          <div className="field" style={{ marginTop: '28px' }}>
            <label htmlFor="message">What are you trying to build?</label>
            <textarea
              id="message"
              placeholder="A few sentences is fine."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && (
            <p style={{ marginTop: '16px', color: 'var(--orange)', fontSize: '14px' }}>{error}</p>
          )}

          <div className="form-foot">
            <span className="mono small muted">— We respond within 2 hours, EET business hours.</span>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending…' : 'Send brief'}
              {!loading && <Arr />}
            </button>
          </div>
        </form>
      ) : (
        <form className="form-body" noValidate onSubmit={handleSubmit}>
          <div className="prompt-shell">
            <div className="prompt-head">
              <span className="mono small muted">— Describe your project</span>
              <span className="mono small text-orange">duo:~$</span>
            </div>
            <textarea
              id="prompt"
              className="prompt-input"
              placeholder="e.g. We're a B2B SaaS, ~20 people, current marketing site is on Webflow but our team can't edit it. We want to move to HubSpot CMS with a proper design system, launch in 8 weeks, budget around €30k…"
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="prompt-foot">
              <div className="row" style={{ gap: '8px' }}>
                <span className="prompt-pill"><span className="mono">⏎</span> Submit</span>
                <span className="prompt-pill"><span className="mono">⇧⏎</span> New line</span>
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending…' : 'Send'}
                {!loading && <Arr />}
              </button>
            </div>
          </div>

          <div className="field" style={{ marginTop: '24px' }}>
            <label htmlFor="prompt-email">Reply to</label>
            <input
              id="prompt-email"
              type="email"
              placeholder="ada@company.com"
              required
              value={promptEmail}
              onChange={(e) => setPromptEmail(e.target.value)}
            />
          </div>

          {error && (
            <p style={{ marginTop: '16px', color: 'var(--orange)', fontSize: '14px' }}>{error}</p>
          )}
        </form>
      )}
    </div>
  );
}
