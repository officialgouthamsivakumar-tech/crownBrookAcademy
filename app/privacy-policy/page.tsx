import type { Metadata } from 'next'
import { INSTITUTION_NAME, INSTITUTION_PHONE } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Privacy Policy - ${INSTITUTION_NAME}`,
  description: 'Privacy Policy for Crownbook Academy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-lg text-white/90">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl bg-white">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">1. Introduction</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              {INSTITUTION_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-[#321e6c] mb-2">2.1 Personal Information</h3>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>Fill out contact forms or inquiry forms</li>
              <li>Schedule consultations</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email, phone, or other means</li>
            </ul>
            <p className="text-[#333333] mb-4 leading-relaxed">
              This information may include: name, email address, phone number, mailing address, academic background, test scores, and other information relevant to your educational counseling needs.
            </p>

            <h3 className="text-xl font-bold text-[#321e6c] mb-2">2.2 Automatically Collected Information</h3>
            <p className="text-[#333333] mb-4 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services, updates, and promotional materials</li>
              <li>Process applications and manage your educational counseling journey</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to legal requests</li>
              <li>To protect our rights, property, or safety, or that of our clients</li>
              <li>With service providers who assist us in operating our website and conducting our business (under strict confidentiality agreements)</li>
              <li>In connection with a business transfer, merger, or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">5. Data Security</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">6. Your Rights</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 text-[#333333] mb-4 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">8. Third-Party Links</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">9. Children's Privacy</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#321e6c] mb-4">11. Contact Us</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-[#333333]">
              <strong>{INSTITUTION_NAME}</strong><br />
              Email: info@crownbookacademy.com<br />
              Phone: {INSTITUTION_PHONE}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
