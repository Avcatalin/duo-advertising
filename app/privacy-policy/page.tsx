import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="hero">
        <div className="aurora aurora-a" style={{ opacity: 0.4 }} />
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">— Legal</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '24px', maxWidth: '20ch' }}>
            Privacy Policy
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
              This Privacy Policy explains how DUO DESIGN ADVERTISING S.R.L. collects, uses, stores,
              and protects personal data when you visit our website, contact us, request information
              about our services, or collaborate with us.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We process personal data in accordance with the General Data Protection Regulation
              (EU) 2016/679, also known as GDPR, and other applicable data protection laws.
            </p>

            {/* 1 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>1. Data Controller</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              The data controller responsible for your personal data is:
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
            <h2 className="h2" style={{ marginBottom: '24px' }}>2. What Personal Data We Collect</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Depending on how you interact with us, we may collect the following types of personal data:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li><strong>Contact information</strong>, such as your name, email address, phone number, company name, and job title.</li>
              <li><strong>Communication data</strong>, such as messages sent through contact forms, emails, phone calls, or other communication channels.</li>
              <li><strong>Project and business information</strong>, such as details about your website, eCommerce project, HubSpot CRM/CMS needs, technical requirements, budget, timeline, and business goals.</li>
              <li><strong>Website usage data</strong>, such as IP address, browser type, device information, pages visited, time spent on the website, referral source, and general analytics information.</li>
              <li><strong>Technical and security data</strong>, such as logs necessary to keep the website secure and prevent misuse.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We do not intentionally collect sensitive personal data through our website.
            </p>

            {/* 3 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>3. How We Collect Personal Data</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may collect personal data directly from you when you:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>contact us through our website or by email;</li>
              <li>request a proposal, quote, consultation, or service information;</li>
              <li>communicate with us during a project or collaboration;</li>
              <li>subscribe to any newsletter or marketing communication, if available;</li>
              <li>browse our website and allow cookies or similar technologies.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We may also collect limited technical data automatically through cookies, analytics tools,
              hosting logs, and website security systems.
            </p>

            {/* 4 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>4. Why We Use Your Personal Data</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We use personal data for the following purposes:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li>to respond to your inquiries and messages;</li>
              <li>to provide information about our web design, web development, eCommerce, HubSpot CRM, HubSpot CMS, and digital services;</li>
              <li>to prepare proposals, estimates, contracts, and project documentation;</li>
              <li>to deliver and manage services requested by you or your company;</li>
              <li>to communicate about ongoing projects, support, updates, and administrative matters;</li>
              <li>to improve our website, services, user experience, and marketing communication;</li>
              <li>to protect the security and proper functioning of our website;</li>
              <li>to comply with legal, accounting, tax, and contractual obligations.</li>
            </ul>

            {/* 5 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>5. Legal Basis for Processing</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We process personal data based on one or more of the following legal grounds:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li><strong>Contract or pre-contractual steps</strong> — when we process your data to prepare an offer, discuss a project, sign a contract, or deliver services.</li>
              <li><strong>Legitimate interest</strong> — when we respond to business inquiries, improve our services, secure our website, manage client relationships, or promote our services in a reasonable and non-intrusive way.</li>
              <li><strong>Legal obligation</strong> — when we need to process and store data for accounting, tax, invoicing, or compliance purposes.</li>
              <li><strong>Consent</strong> — when you give us permission for specific activities, such as optional cookies, newsletters, or marketing communication, where applicable. You can withdraw your consent at any time.</li>
            </ul>

            {/* 6 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>6. Cookies and Analytics</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Our website may use cookies and similar technologies to ensure proper functionality,
              analyze website traffic, improve user experience, and support marketing activities.
              Cookies may include:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>strictly necessary cookies required for the website to work;</li>
              <li>analytics cookies that help us understand how visitors use the website;</li>
              <li>marketing or tracking cookies, only where applicable and based on consent where required.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              You can manage or disable cookies through your browser settings or through the cookie
              consent banner, if available on the website. A separate{' '}
              <a href="/cookie-policy" style={{ color: 'var(--fg)' }}>Cookie Policy</a> provides
              more detailed information about the cookies we use.
            </p>

            {/* 7 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>7. How Long We Keep Your Data</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We keep personal data only for as long as necessary for the purposes described in this
              Privacy Policy. In general:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>contact form and inquiry data may be kept for the time needed to respond and manage potential business opportunities;</li>
              <li>client and project data may be kept for the duration of the collaboration and afterwards as needed for legal, contractual, or legitimate business purposes;</li>
              <li>accounting and invoicing data is kept according to applicable Romanian legal requirements;</li>
              <li>technical logs are kept for a limited period necessary for security and website maintenance.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              When personal data is no longer needed, we will delete it, anonymize it, or securely
              archive it where required by law.
            </p>

            {/* 8 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>8. Who We Share Personal Data With</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We do not sell your personal data. We may share personal data only where necessary with:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>hosting providers and website infrastructure providers;</li>
              <li>email and communication service providers;</li>
              <li>analytics and marketing tools, where applicable;</li>
              <li>accounting, legal, or administrative service providers;</li>
              <li>trusted collaborators or subcontractors involved in delivering our services;</li>
              <li>public authorities, courts, or institutions when required by law.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Any third-party service providers we work with are expected to process personal data
              securely and only for the purposes agreed with us.
            </p>

            {/* 9 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>9. International Data Transfers</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Some tools or service providers we use may process data outside the European Economic Area.
              Where this happens, we take reasonable steps to ensure that appropriate safeguards are in
              place, such as adequacy decisions, Standard Contractual Clauses, or other lawful transfer
              mechanisms required under GDPR.
            </p>

            {/* 10 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>10. Data Security</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We apply reasonable technical and organizational measures to protect personal data against
              unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              However, no website, email system, or online transmission method is completely secure.
              We encourage you not to send confidential or sensitive information through unsecured channels.
            </p>

            {/* 11 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>11. Your Rights Under GDPR</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Under GDPR, you have the following rights, where applicable:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>the right to be informed about how your personal data is processed;</li>
              <li>the right to access your personal data;</li>
              <li>the right to request correction of inaccurate or incomplete data;</li>
              <li>the right to request deletion of your personal data;</li>
              <li>the right to request restriction of processing;</li>
              <li>the right to object to processing based on legitimate interest;</li>
              <li>the right to data portability;</li>
              <li>the right to withdraw consent at any time, where processing is based on consent;</li>
              <li>the right not to be subject to decisions based solely on automated processing, including profiling, where applicable.</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              The Romanian Data Protection Authority also lists these GDPR rights, including access,
              rectification, erasure, restriction, portability, objection, and the right to submit a complaint.
            </p>

            {/* 12 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>12. How to Exercise Your Rights</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              To exercise your rights, you can contact us at:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>Email: <a href="mailto:contact@duoadv.ro" style={{ color: 'var(--fg)' }}>contact@duoadv.ro</a></li>
              <li>Phone: <a href="tel:+40771190628" style={{ color: 'var(--fg)' }}>+40 771 190 628</a></li>
              <li>Address: Strada Tănase Dumitrescu nr. 13, Sector 2, Bucharest, Romania</li>
            </ul>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may ask you to provide information necessary to confirm your identity before
              processing your request.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We will respond to your request within the timeframe required by applicable law. Under
              GDPR, controllers generally respond within one month, with possible extension by two
              further months when necessary, depending on the complexity and number of requests.
            </p>

            {/* 13 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>13. Right to Lodge a Complaint</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              If you believe that your personal data has been processed unlawfully, you have the right
              to lodge a complaint with the Romanian supervisory authority:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>The National Supervisory Authority for Personal Data Processing — ANSPDCP</li>
              <li>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>www.dataprotection.ro</a></li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              According to ANSPDCP, complaints may be filed in writing, in Romanian or English, and
              may be submitted by post, email, or through the online form available on the
              authority&apos;s website.
            </p>

            {/* 14 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>14. Links to Other Websites</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices, content, or security of those websites. We recommend reading the
              privacy policies of any external websites you visit.
            </p>

            {/* 15 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>15. Changes to This Privacy Policy</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may update this Privacy Policy from time to time to reflect changes in our services,
              website functionality, legal requirements, or data protection practices.
            </p>
            <p className="muted">
              The updated version will be published on this page with a revised &quot;Last updated&quot; date.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
