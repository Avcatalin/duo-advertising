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
              By using our website, you may allow us to place cookies on your device, depending on
              your cookie preferences. Non-essential cookies are used only where legally permitted
              and, where required, based on your consent.
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
              <li>Email: <a href="mailto:contact@duoadv.ro" style={{ color: 'var(--fg)' }}>contact@duoadv.ro</a></li>
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
              These cookies cannot usually be disabled through our website because the website may
              not work properly without them.
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
              Analytics cookies are used only where legally permitted and, where required, based on
              your consent.
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Marketing Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Marketing cookies may be used to understand the effectiveness of marketing campaigns,
              personalize content, or support advertising activities on platforms such as Google,
              Meta, LinkedIn, or similar services.
            </p>
            <p className="muted" style={{ marginBottom: '40px' }}>
              These cookies are used only if they are active on the website and only where legally
              permitted, based on your consent.
            </p>

            <h3 className="h3" style={{ marginBottom: '16px' }}>Functional Cookies</h3>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Functional cookies help remember choices you make, such as language preferences, form
              preferences, or other website settings.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              These cookies improve the user experience but may not be essential for the website
              to function.
            </p>

            {/* 4 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>4. Third-Party Cookies</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Some cookies may be placed by third-party services used on our website. These may
              include services such as:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>Google Analytics or Google Tag Manager;</li>
              <li>Meta Pixel or other advertising tools;</li>
              <li>HubSpot tracking tools;</li>
              <li>embedded content providers;</li>
              <li>security, hosting, or performance tools.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Third-party providers may process data according to their own privacy and cookie policies.
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
              <li>support marketing and advertising activities, where applicable.</li>
            </ul>

            {/* 6 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>6. Cookie Consent</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              When you first visit our website, you may be asked to accept, reject, or manage cookies.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Strictly necessary cookies may be used without consent because they are required for
              the website to function.
            </p>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Non-essential cookies, such as analytics or marketing cookies, should only be used
              after your consent where required by law. The EDPB guidance confirms that access to
              or storage of information on a user&apos;s device, including cookies and similar tracking
              technologies, falls under the ePrivacy consent framework unless an exemption applies.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              You can change or withdraw your cookie consent at any time by using the cookie settings
              available on the website, if enabled.
            </p>

            {/* 7 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>7. How to Manage Cookies</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              You can manage cookies in several ways:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>through the cookie banner or cookie settings on our website;</li>
              <li>by changing your browser settings;</li>
              <li>by deleting existing cookies from your device;</li>
              <li>by blocking cookies from specific websites or third parties.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Please note that blocking some cookies may affect how the website works.
            </p>

            {/* 8 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>8. Cookies Used on This Website</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              The exact cookies used may depend on the tools active on the website at a given time.
              Typical cookies may include:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>strictly necessary cookies for website functionality and cookie consent management;</li>
              <li>analytics cookies for website traffic measurement;</li>
              <li>marketing cookies for advertising and campaign tracking;</li>
              <li>functional cookies for remembering user preferences.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              You may review and manage active cookies through your browser or through the cookie
              consent tool available on the website.
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
              The retention period depends on the type of cookie and the provider that places it.
            </p>

            {/* 10 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>10. Updates to This Cookie Policy</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may update this Cookie Policy from time to time to reflect changes in cookies,
              tools, legal requirements, or website functionality.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              The updated version will be published on this page with a revised &quot;Last updated&quot; date.
            </p>

            {/* 11 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>11. Contact</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              For questions about this Cookie Policy or how we use cookies, you can contact us at:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', lineHeight: '2' }}>
              <li><strong>DUO DESIGN ADVERTISING S.R.L.</strong></li>
              <li>Email: <a href="mailto:contact@duoadv.ro" style={{ color: 'var(--fg)' }}>contact@duoadv.ro</a></li>
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
