import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Cookie Policy' };

export default function CookiePolicyPage() {
  return (
    <>
      <section className="hero">
        <div className="aurora aurora-a" style={{ opacity: 0.4 }} />
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">— Legal</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '24px', maxWidth: '20ch' }}>
            Cookie Policy
          </h1>
          <p className="lead reveal" data-delay="2" style={{ marginTop: '24px', maxWidth: '60ch' }}>
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '90ch' }} className="reveal">

            <p className="muted" style={{ marginBottom: '24px' }}>
              This Cookie Policy explains how DUO DESIGN ADVERTISING S.R.L. uses cookies and similar
              technologies on this website.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We use cookies in accordance with the General Data Protection Regulation (EU) 2016/679
              (GDPR), Romanian Law no. 190/2018, and Romanian Law no. 506/2004 on the processing of
              personal data and the protection of privacy in the electronic communications sector
              (which transposes the ePrivacy Directive 2002/58/EC, as amended). Non-essential cookies
              are used only where legally permitted and, where required, based on your prior consent.
            </p>

            {/* 1 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>1. Who We Are</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              This website is operated by:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li><strong>DUO DESIGN ADVERTISING S.R.L.</strong></li>
              <li>Registration no.: J40/2378/27.02.2015</li>
              <li>VAT no.: RO34166750</li>
              <li>Registered address: Strada Tănase Dumitrescu nr. 13, Sector 2, Bucharest, Romania</li>
              <li>Phone: <a href="tel:+40771190628" style={{ color: 'var(--fg)' }}>+40 771 190 628</a></li>
              <li>Email: <a href="mailto:contact@duoadv.com" style={{ color: 'var(--fg)' }}>contact@duoadv.com</a></li>
            </ul>

            {/* 2 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>2. What Are Cookies?</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Cookies are small text files stored on your computer, tablet, or mobile device when
              you visit a website.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              They help websites function properly, remember preferences, improve user experience,
              analyze traffic, and, where applicable, support marketing or advertising activities.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Cookies are passive files and do not contain software, viruses, or spyware. ANSPDCP
              describes cookies as small files stored on a user&apos;s terminal equipment by a web server
              through a browser request.
            </p>

            {/* 3 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>3. Types of Cookies We May Use</h2>
            <p className="muted" style={{ marginBottom: '32px' }}>
              Our website may use the following types of cookies:
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Strictly Necessary Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              These cookies are required for the website to function correctly. They may support
              basic features such as page navigation, form submission, security, cookie consent
              preferences, and website performance.
            </p>
            <p className="muted" style={{ marginBottom: '40px' }}>
              These cookies do not require your consent and cannot be disabled through our cookie
              settings. Under Law no. 506/2004 Art. 4(5), storing information on a user&apos;s device
              is permitted without consent when strictly necessary to provide a service explicitly
              requested by the user.
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Analytics Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Analytics cookies help us understand how visitors use our website, which pages are
              visited, how users interact with content, and how we can improve the website experience.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              These cookies may collect information such as visited pages, traffic sources, browser
              type, device information, and general usage behavior.
            </p>
            <p className="muted" style={{ marginBottom: '40px' }}>
              Analytics cookies require your consent before being placed on your device, in accordance
              with the ePrivacy framework and EDPB guidance.
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Marketing Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Marketing cookies may be used to understand the effectiveness of marketing campaigns,
              personalize content, or support advertising activities on platforms such as Google,
              Meta, LinkedIn, or similar services.
            </p>
            <p className="muted" style={{ marginBottom: '40px' }}>
              These cookies require your prior consent before being placed on your device.
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Functional Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Functional cookies help remember choices you make, such as language preferences, form
              preferences, or other website settings.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              These cookies improve the user experience but may not be essential for the website
              to function. They require your consent unless they fall within a narrow necessity exemption.
            </p>

            {/* 4 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>4. Third-Party Cookies</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Some cookies may be placed by third-party services used on our website. These may
              include services such as:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>
                Google Analytics or Google Tag Manager —{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>
                  Google Privacy Policy
                </a>
              </li>
              <li>
                Meta Pixel or other Meta advertising tools —{' '}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>
                  Meta Privacy Policy
                </a>
              </li>
              <li>
                HubSpot tracking tools —{' '}
                <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>
                  HubSpot Privacy Policy
                </a>
              </li>
              <li>embedded content providers;</li>
              <li>security, hosting, or performance tools.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Third-party providers set and process cookies according to their own privacy and cookie
              policies. We recommend reviewing those policies for full information on how they handle
              your data.
            </p>

            {/* 5 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>5. Why We Use Cookies</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may use cookies to:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li>make the website work correctly;</li>
              <li>remember your cookie preferences;</li>
              <li>protect the website against misuse or security risks;</li>
              <li>analyze website traffic and user behavior;</li>
              <li>improve website performance and content;</li>
              <li>understand which services or pages are most relevant to visitors;</li>
              <li>support marketing and advertising activities, where you have given consent.</li>
            </ul>

            {/* 6 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>6. Cookie Consent</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              When you first visit our website, you will be asked to accept, reject, or customize
              your cookie preferences through a cookie consent banner.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Strictly necessary cookies are used without consent as permitted under Art. 4(5) of
              Romanian Law no. 506/2004. All other cookie categories — analytics, marketing, and
              functional — are only activated after you provide explicit, informed, freely given,
              specific, and unambiguous consent, as required by GDPR Art. 6(1)(a) and Art. 4(5)
              of Law no. 506/2004.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              The EDPB guidance confirms that access to or storage of information on a user&apos;s
              device, including cookies and similar tracking technologies, falls under the ePrivacy
              consent framework unless a strict necessity exemption applies.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              You can change or withdraw your cookie consent at any time by using the cookie settings
              available on the website. Withdrawing consent does not affect the lawfulness of
              processing carried out before withdrawal.
            </p>

            {/* 7 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>7. How to Manage Cookies</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              You can manage cookies in several ways:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>through the cookie banner or cookie settings on our website;</li>
              <li>by changing your browser settings to block or delete cookies;</li>
              <li>by deleting existing cookies stored on your device;</li>
              <li>by blocking cookies from specific websites or third parties through your browser or privacy tools.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Please note that blocking or deleting strictly necessary cookies may affect how the
              website works or prevent some features from functioning correctly.
            </p>

            {/* 8 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>8. Cookies Used on This Website</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              The exact cookies in use may change as the tools and services active on the website
              evolve. The table below lists typical cookies that may be present, their purpose,
              and their approximate retention duration:
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }} className="muted">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border, #333)' }}>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Cookie name</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Provider</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Purpose</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>cookieconsent_status</code></td>
                    <td style={{ padding: '10px 12px' }}>First-party</td>
                    <td style={{ padding: '10px 12px' }}>Necessary</td>
                    <td style={{ padding: '10px 12px' }}>Stores your cookie consent preference</td>
                    <td style={{ padding: '10px 12px' }}>1 year</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>_ga</code></td>
                    <td style={{ padding: '10px 12px' }}>Google</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Distinguishes unique users for Google Analytics</td>
                    <td style={{ padding: '10px 12px' }}>2 years</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>_ga_*</code></td>
                    <td style={{ padding: '10px 12px' }}>Google</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Persists Google Analytics session state</td>
                    <td style={{ padding: '10px 12px' }}>2 years</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>_gcl_au</code></td>
                    <td style={{ padding: '10px 12px' }}>Google</td>
                    <td style={{ padding: '10px 12px' }}>Marketing</td>
                    <td style={{ padding: '10px 12px' }}>Stores and tracks conversions for Google Ads</td>
                    <td style={{ padding: '10px 12px' }}>3 months</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>_fbp</code></td>
                    <td style={{ padding: '10px 12px' }}>Meta</td>
                    <td style={{ padding: '10px 12px' }}>Marketing</td>
                    <td style={{ padding: '10px 12px' }}>Identifies browsers for Meta advertising measurement</td>
                    <td style={{ padding: '10px 12px' }}>3 months</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>hubspotutk</code></td>
                    <td style={{ padding: '10px 12px' }}>HubSpot</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Tracks visitor identity across sessions for HubSpot</td>
                    <td style={{ padding: '10px 12px' }}>13 months</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>__hstc</code></td>
                    <td style={{ padding: '10px 12px' }}>HubSpot</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Tracks visitor across sessions and subdomains</td>
                    <td style={{ padding: '10px 12px' }}>13 months</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border, #222)' }}>
                    <td style={{ padding: '10px 12px' }}><code>__hssc</code></td>
                    <td style={{ padding: '10px 12px' }}>HubSpot</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Tracks sessions for HubSpot analytics</td>
                    <td style={{ padding: '10px 12px' }}>30 minutes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 12px' }}><code>__hssrc</code></td>
                    <td style={{ padding: '10px 12px' }}>HubSpot</td>
                    <td style={{ padding: '10px 12px' }}>Analytics</td>
                    <td style={{ padding: '10px 12px' }}>Determines whether a new session has started</td>
                    <td style={{ padding: '10px 12px' }}>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="muted" style={{ marginBottom: '64px' }}>
              This list may not be exhaustive. You can review all cookies currently active on your
              device through your browser&apos;s developer tools or through the cookie settings on this
              website.
            </p>

            {/* 9 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>9. How Long Cookies Stay on Your Device</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Cookies may be:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li><strong>Session cookies</strong> — deleted automatically when you close your browser.</li>
              <li><strong>Persistent cookies</strong> — remain on your device for a defined period or until you delete them manually.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              The retention period for each cookie is shown in the table in Section 8. Specific
              durations for third-party cookies may change at the discretion of the third-party
              provider.
            </p>

            {/* 10 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>10. Age Restriction</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              This website is intended for businesses and adult professionals. We do not knowingly
              collect personal data through cookies or other means from persons under 16 years of age.
              Under Art. 5 of Romanian Law no. 190/2018, the minimum age for valid digital consent
              in Romania is 16. If you are under 16, please do not use this website without the
              consent of a parent or legal guardian.
            </p>

            {/* 11 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>11. Updates to This Cookie Policy</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may update this Cookie Policy from time to time to reflect changes in cookies,
              tools, legal requirements, or website functionality.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              The updated version will be published on this page with a revised &quot;Last updated&quot; date.
            </p>

            {/* 12 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>12. Contact</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              For questions about this Cookie Policy or how we use cookies, you can contact us at:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', lineHeight: '2' }}>
              <li><strong>DUO DESIGN ADVERTISING S.R.L.</strong></li>
              <li>Email: <a href="mailto:contact@duoadv.com" style={{ color: 'var(--fg)' }}>contact@duoadv.com</a></li>
              <li>Phone: <a href="tel:+40771190628" style={{ color: 'var(--fg)' }}>+40 771 190 628</a></li>
              <li>Address: Strada Tănase Dumitrescu nr. 13, Sector 2, Bucharest, Romania</li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
