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
              (EU) 2016/679 (GDPR) and Romanian Law no. 190/2018 on measures for the implementation
              of Regulation (EU) 2016/679, as well as other applicable data protection and privacy laws.
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
              <li>Email: <a href="mailto:contact@duoadv.com" style={{ color: 'var(--fg)' }}>contact@duoadv.com</a></li>
            </ul>

            {/* 2 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>2. Data Protection Officer</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Based on the nature and scale of our data processing activities, we are not required to
              appoint a Data Protection Officer under Article 37 GDPR and Romanian Law no. 190/2018.
              For any questions or concerns regarding the processing of your personal data, please
              contact us directly using the details provided in Section 1.
            </p>

            {/* 3 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>3. What Personal Data We Collect</h2>
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

            {/* 4 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>4. How We Collect Personal Data</h2>
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

            {/* 5 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>5. Why We Use Your Personal Data and Legal Basis</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We process personal data only where we have a lawful basis to do so under GDPR Art. 6.
              The table below maps each purpose to the applicable legal ground:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li>
                <strong>Responding to inquiries and messages</strong> —{' '}
                <em>Legitimate interest</em> (Art. 6(1)(f)) in managing business communications, or{' '}
                <em>pre-contractual steps</em> (Art. 6(1)(b)) where the inquiry relates to a specific project.
              </li>
              <li>
                <strong>Preparing proposals, estimates, contracts, and project documentation</strong> —{' '}
                <em>Pre-contractual or contractual steps</em> (Art. 6(1)(b)).
              </li>
              <li>
                <strong>Delivering and managing services</strong> —{' '}
                <em>Contract performance</em> (Art. 6(1)(b)).
              </li>
              <li>
                <strong>Communication about ongoing projects, support, and administrative matters</strong> —{' '}
                <em>Contract performance</em> (Art. 6(1)(b)) or <em>legitimate interest</em> (Art. 6(1)(f)).
              </li>
              <li>
                <strong>Accounting, invoicing, and tax obligations</strong> —{' '}
                <em>Legal obligation</em> (Art. 6(1)(c)), including Law no. 82/1991 on accounting
                and the Fiscal Procedure Code.
              </li>
              <li>
                <strong>Protecting the security and proper functioning of our website</strong> —{' '}
                <em>Legitimate interest</em> (Art. 6(1)(f)) in maintaining a secure online presence.
              </li>
              <li>
                <strong>Improving our website, services, and user experience</strong> —{' '}
                <em>Legitimate interest</em> (Art. 6(1)(f)), or <em>consent</em> (Art. 6(1)(a))
                where analytics or tracking tools require it.
              </li>
              <li>
                <strong>Marketing communication, newsletters, and promotional activities</strong> —{' '}
                <em>Consent</em> (Art. 6(1)(a)) for individuals; <em>legitimate interest</em>{' '}
                (Art. 6(1)(f)) may apply in a B2B context where permitted. You may withdraw consent
                or object to legitimate-interest processing at any time.
              </li>
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
              consent banner on the website. A separate{' '}
              <a href="/cookie-policy" style={{ color: 'var(--fg)' }}>Cookie Policy</a> provides
              more detailed information about the cookies we use.
            </p>

            {/* 7 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>7. How Long We Keep Your Data</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We keep personal data only for as long as necessary for the purposes described in this
              Privacy Policy. Specific retention periods are as follows:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>
                <strong>Contact form and inquiry data</strong> — up to 3 years from the date of
                last contact, in line with the general civil prescription period under Art. 2517
                of the Romanian Civil Code.
              </li>
              <li>
                <strong>Client and project data</strong> — for the duration of the collaboration
                and for up to 3 years after its conclusion, for legitimate business, contractual,
                or legal purposes.
              </li>
              <li>
                <strong>Accounting registers and financial statements</strong> — 10 years from the
                end of the financial year, in accordance with Art. 25 of Law no. 82/1991.
              </li>
              <li>
                <strong>Supporting accounting documents (invoices, receipts)</strong> — minimum
                5 years from the end of the financial year to which they relate, in accordance with
                Art. 25 of Law no. 82/1991 and the Fiscal Procedure Code.
              </li>
              <li>
                <strong>Tax-relevant records</strong> — 5 years from the date the corresponding
                tax obligation arose, in accordance with the Romanian Fiscal Procedure Code.
              </li>
              <li>
                <strong>Technical and security logs</strong> — up to 12 months, as necessary for
                website security and maintenance.
              </li>
              <li>
                <strong>Consent records</strong> — for as long as the consent remains relevant,
                or for up to 3 years after the last interaction, to demonstrate compliance.
              </li>
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
              Where third-party service providers act as data processors on our behalf, we enter
              into Data Processing Agreements (DPAs) in accordance with Art. 28 GDPR to ensure
              they process personal data only for the agreed purposes and with appropriate safeguards.
            </p>

            {/* 9 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>9. International Data Transfers</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Some tools or service providers we use may process data outside the European Economic Area.
              Where this happens, we take reasonable steps to ensure that appropriate safeguards are in
              place, such as adequacy decisions, Standard Contractual Clauses (SCCs) under Art. 46
              GDPR, or other lawful transfer mechanisms required under GDPR.
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
            <h2 className="h2" style={{ marginBottom: '24px' }}>11. Data Breach Notification</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              In the event of a personal data breach, we will act in accordance with our obligations
              under GDPR Art. 33–34 and Romanian Law no. 190/2018:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '64px', lineHeight: '2' }}>
              <li>
                We will notify the National Supervisory Authority for Personal Data Processing
                (ANSPDCP) within 72 hours of becoming aware of a breach that is likely to result
                in a risk to the rights and freedoms of natural persons.
              </li>
              <li>
                Where a breach is likely to result in a high risk to your rights and freedoms, we
                will communicate it to you without undue delay, unless an exemption under Art. 34(3)
                GDPR applies.
              </li>
            </ul>

            {/* 12 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>12. Minors</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Our website and services are directed at businesses and adult professionals. We do not
              knowingly collect personal data from persons under 16 years of age. Under Art. 5 of
              Romanian Law no. 190/2018, the minimum age for valid digital consent is 16. If we
              become aware that we have inadvertently collected personal data from a person under 16
              without appropriate parental consent, we will delete it promptly.
            </p>

            {/* 13 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>13. Your Rights Under GDPR</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              Under GDPR and Romanian Law no. 190/2018, you have the following rights, where applicable:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>the right to be informed about how your personal data is processed;</li>
              <li>the right to access your personal data (Art. 15 GDPR);</li>
              <li>the right to request correction of inaccurate or incomplete data (Art. 16 GDPR);</li>
              <li>the right to request deletion of your personal data (Art. 17 GDPR);</li>
              <li>the right to request restriction of processing (Art. 18 GDPR);</li>
              <li>the right to object to processing based on legitimate interest (Art. 21 GDPR);</li>
              <li>the right to data portability (Art. 20 GDPR);</li>
              <li>the right to withdraw consent at any time, where processing is based on consent (Art. 7(3) GDPR);</li>
              <li>the right not to be subject to decisions based solely on automated processing, including profiling, where applicable (Art. 22 GDPR).</li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We do not carry out automated decision-making or profiling that produces legal or
              similarly significant effects on data subjects.
            </p>

            {/* 14 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>14. How to Exercise Your Rights</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              To exercise your rights, you can contact us at:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li>Email: <a href="mailto:contact@duoadv.com" style={{ color: 'var(--fg)' }}>contact@duoadv.com</a></li>
              <li>Phone: <a href="tel:+40771190628" style={{ color: 'var(--fg)' }}>+40 771 190 628</a></li>
              <li>Address: Strada Tănase Dumitrescu nr. 13, Sector 2, Bucharest, Romania</li>
            </ul>
            <p className="muted" style={{ marginBottom: '16px' }}>
              We may ask you to provide information necessary to confirm your identity before
              processing your request.
            </p>
            <p className="muted" style={{ marginBottom: '64px' }}>
              We will respond to your request within the timeframe required by applicable law. Under
              GDPR Art. 12(3), controllers must respond within one month of receipt, with a possible
              extension of two further months where necessary due to the complexity or number of requests.
            </p>

            {/* 15 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>15. Right to Lodge a Complaint</h2>
            <p className="muted" style={{ marginBottom: '16px' }}>
              If you believe that your personal data has been processed unlawfully, you have the right
              to lodge a complaint with the Romanian supervisory authority:
            </p>
            <ul className="muted" style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: '2' }}>
              <li><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal — ANSPDCP</strong></li>
              <li>Address: Bulevardul General Gheorghe Magheru nr. 28–30, Sector 1, București, 010336</li>
              <li>Email: <a href="mailto:anspdcp@dataprotection.ro" style={{ color: 'var(--fg)' }}>anspdcp@dataprotection.ro</a></li>
              <li>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>www.dataprotection.ro</a></li>
            </ul>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Complaints may be filed in writing, in Romanian or English, and may be submitted by
              post, email, or through the online form available on the authority&apos;s website. You also
              have the right to pursue judicial remedies in competent Romanian courts.
            </p>

            {/* 16 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>16. Links to Other Websites</h2>
            <p className="muted" style={{ marginBottom: '64px' }}>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices, content, or security of those websites. We recommend reading the
              privacy policies of any external websites you visit.
            </p>

            {/* 17 */}
            <h2 className="h2" style={{ marginBottom: '24px' }}>17. Changes to This Privacy Policy</h2>
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
