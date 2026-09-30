# Technical SEO and link audit — 30 September 2026

## Scope and outcome

Kept the existing website. No pages, redesign, translations, pricing, CRM integrations, deployment, or push. No CSS, fonts, navigation structure, animation code, or visible page copy changed. The initial worktree was clean. No repository AGENTS.md instructions were found.

## Links

- Fixed the footer's `contact@duoadv.com` link, which incorrectly opened `mailto:contact@duoadv.ro`.
- Converted the privacy policy's internal Cookie Policy link and the form confirmation's Process link to Next.js Link without changing their presentation.
- Checked 204 rendered link instances across seven pages, including 10 section-anchor instances. All internal targets and fragment IDs resolve. All visible email addresses match their destinations; telephone links use valid `tel:+40771190628` formatting. External new-tab links already include `noopener noreferrer`.
- All five live portfolio destinations returned HTTP 200 after redirects: angelinecakes.ro, dental4uclinic.ie, vaditex.ro, marmirom.ro, and terapi.ro. LinkedIn, Google privacy, Facebook privacy, HubSpot privacy, and dataprotection.ro also returned 200. Existing URLs were retained; a successful HTTP response does not independently verify ownership or every destination's content.
- Confirmed the existing `/work` → `/process` permanent redirect returns 308. No nonexistent route was found in the rendered navigation.
- Browser checks confirmed mobile menu opening/closing, client-side navigation, correct active navigation state, and homepage-to-service anchor navigation.

## Why form messages are missing

Read-only checks against the configured Resend account found:

- The `duoadv.com` sending domain is verified.
- The latest available message to `contact@duoadv.com`, created at `2026-09-30 08:54:46.815000+00`, has event `suppressed`.
- The recipient is on the account's suppression list with origin `bounce`, recorded at `2026-06-30 10:02:01.177+00`.

This is an account-level delivery blocker, not a styling issue. Resend documents suppression records and their origins in its [suppression API documentation](https://resend.com/docs/api-reference/suppressions/get-suppression).

The old handler also ignored the error returned by Resend and could falsely report success. The local handler now checks provider errors and message IDs, handles unavailable credentials/network failures, validates request fields, escapes enquiry HTML, and logs only delivery IDs/error categories. The form respects native required/email validation, prevents duplicate in-flight submissions, and exposes failures as accessible alerts. Both existing form modes are preserved.

**Still requires owner action:** confirm `contact@duoadv.com` exists and accepts external mail; investigate/fix the original mailbox or routing bounce; then remove the suppression in Resend and run a controlled delivery test. Check the deployed environment's API key belongs to the intended account. No suppression, account settings, DNS, or remote configuration was changed, and no real email was sent during this audit. Provider acceptance is not proof of inbox delivery; the existing confirmation copy was retained as requested. Its receipt/two-hour-response claim remains a business commitment for your review.

## Technical SEO

- Added unique, content-specific titles and descriptions for all seven public pages.
- Set `metadataBase`, self-referencing canonicals, Open Graph URLs, and the sitemap to `https://www.duoadv.com`, matching the observed production apex-to-www redirect.
- Added per-page Open Graph and Twitter summary metadata. No suitable agency-wide sharing image exists: the available large images are client previews, so no misleading image was selected or new asset created.
- Kept the sitemap limited to `/`, `/about`, `/services`, `/process`, `/contact`, `/privacy-policy`, and `/cookie-policy`. Removed automatically fabricated modification dates and unnecessary frequency/priority hints.
- Kept robots production indexing enabled and `/api/` disallowed; corrected its sitemap host. Robots directives are not an access-control mechanism. No private page routes were found.
- Retained correct English document language. No translated pages or hreflang added.
- Added Organization JSON-LD using the existing site's name, legal name, production URL, email, telephone, and LinkedIn destination. No addresses, ratings, reviews, statistics, or unverified claims added. Business details come from existing site content, not an independent company-registry verification.
- Made portfolio image alternatives identify the client website previews. Existing decorative graphics remain unchanged.
- Confirmed one H1 per public page. Changed the form confirmation heading from H3 to H2 while retaining its `.h3` class and identical styling.
- Production HTML checks found seven unique titles, descriptions, and canonicals; matching OG URLs; Twitter metadata; valid Organization JSON-LD; and no accidental noindex. SEO URLs do not reference localhost or preview hosts.

## Verification

- `npm run lint`: passed. Replaced the obsolete `next lint` command with ESLint's flat configuration and aligned the existing Next ESLint configuration to 16.2.7. Existing mount/route effect behavior in Nav/CookieBanner is explicitly exempted from `set-state-in-effect` rather than refactored. Literal `//` labels are expressed as JSX strings; their rendered text is unchanged.
- `npm run typecheck`: passed after production generation cleared stale route types from the reverted redesign.
- `npm test`: 7/7 passed, covering both form modes, provider rejection/network failure, missing provider IDs/credentials, invalid requests, and HTML escaping. Provider requests are mocked.
- `npm run build`: passed using the existing Geist fonts. The sandboxed first attempt could not reach Google Fonts; a network-enabled retry succeeded without changing typography.
- Local production HTTP checks: all seven pages, `/sitemap.xml`, and `/robots.txt` returned 200; legacy `/work` returned 308.
- Browser form checks: blank submission prevented and mocked provider failure displayed. No real mail sent.
- Before/after full-page screenshots at 390px and 1440px widths: **all 14 image pairs pixel-identical**. Full-page DOM geometry, text, and computed typography/colors also matched. Animations were frozen only in the test browser for deterministic captures, and cookie consent was set to declined. These captures cover default page states, not every interactive state.
- Screenshot evidence and browser snapshots: `/tmp/duo-seo-review/` (temporary local artifacts).
- `git diff --check`: passed.

## Review items

1. Resolve the Resend recipient suppression before expecting reliable form delivery.
2. Restart the already-running development server: it was still running Next 16.3.7 while the repository lockfile specifies 16.2.7. It was left untouched; verification used a separate production server.
3. `components/WorkGrid.tsx` contains nine `href="#"` placeholders, but is not imported by any current page. Supply real destinations before reusing it; no replacements were invented.
4. Confirm the retained `/work` → `/process` redirect still represents the intended legacy destination.
5. Supply an approved agency social-sharing image if you want image-rich link previews.
6. Existing policy wording, business details, and response-time commitments were preserved; this was not a legal or business-claim verification.

## Files changed

- SEO: `lib/seo.ts`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and the page files for `/`, `/about`, `/services`, `/process`, `/contact`, `/privacy-policy`, `/cookie-policy`.
- Links/form: `components/Footer.tsx`, `components/ContactForm.tsx`, `app/api/contact/route.ts` (plus the privacy-policy page listed above).
- Checks/tooling: `eslint.config.mjs`, `package.json`, `package-lock.json`, `tests/contact-route.test.mjs`.
- Report: `TECHNICAL-SEO-AUDIT.md`.

All changes remain local and uncommitted.
