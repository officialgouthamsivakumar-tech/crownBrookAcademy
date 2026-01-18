import type { Metadata } from 'next'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Terms & Conditions - ${INSTITUTION_NAME}`,
  description: 'Terms and Conditions for Crownbrook Academy. Read our terms of service and usage policies.',
}

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms & Conditions</h1>
            <p className="text-lg text-white/90">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              By accessing and using the services of {INSTITUTION_NAME} ("we," "our," or "us"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">2. Services</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              {INSTITUTION_NAME} provides educational counseling and consulting services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>University and course selection guidance</li>
              <li>Application assistance and document preparation</li>
              <li>Visa application support</li>
              <li>Test preparation guidance</li>
              <li>Pre-departure counseling</li>
            </ul>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">3. Client Responsibilities</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">As a client, you agree to:</p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>Provide accurate, complete, and truthful information</li>
              <li>Cooperate with our counselors and follow their guidance</li>
              <li>Meet all deadlines and requirements as communicated</li>
              <li>Pay all fees and charges as agreed upon</li>
              <li>Respect the confidentiality of other clients' information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">4. Fees and Payment</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Our service fees will be communicated to you before the commencement of services. Payment terms and schedules will be agreed upon in writing. All fees are non-refundable unless otherwise specified in a written agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">5. No Guarantee of Admission</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              While we provide expert guidance and support, we cannot guarantee admission to any university or institution. Admission decisions are made solely by the respective educational institutions. We are not responsible for rejection of applications or visa denials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">6. Intellectual Property</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of {INSTITUTION_NAME} and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">7. Limitation of Liability</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              {INSTITUTION_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">8. Confidentiality</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We maintain strict confidentiality of all client information. However, we may disclose information when required by law or to protect our rights and interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">9. Termination</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Either party may terminate the service agreement at any time with written notice. Upon termination, all outstanding fees remain due and payable. We reserve the right to terminate services immediately in case of breach of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">10. Third-Party Services</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Our services may involve third-party services such as universities, visa offices, testing agencies, etc. We are not responsible for the actions, policies, or services of these third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">11. Dispute Resolution</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Any disputes arising from these terms or our services shall be resolved through good faith negotiation. If resolution cannot be reached, disputes shall be subject to the exclusive jurisdiction of the courts in our jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">12. Changes to Terms</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">13. Contact Information</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-[#333333]">
              <strong>{INSTITUTION_NAME}</strong><br />
              Email: info@crownbookacademy.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
