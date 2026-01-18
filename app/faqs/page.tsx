'use client'

import { useState } from 'react'
import { INSTITUTION_NAME } from '@/app/config/constants'

const faqs = [
  {
    question: 'What services does Crownbrook Academy provide?',
    answer: 'We provide comprehensive educational counseling services including university selection, application assistance, visa processing, test preparation guidance, and pre-departure support. We help students at every step of their journey to study abroad.'
  },
  {
    question: 'How much does your service cost?',
    answer: 'Our consultation fees vary depending on the services required. We offer free initial consultations to understand your needs. Contact us for detailed pricing information tailored to your specific requirements.'
  },
  {
    question: 'Which countries do you help students apply to?',
    answer: 'We assist students with applications to universities in the United States, United Kingdom, Canada, Australia, Germany, Singapore, and many other countries worldwide. Our network includes partnerships with top institutions globally.'
  },
  {
    question: 'How long does the admission process take?',
    answer: 'The admission process typically takes 3-6 months from initial consultation to receiving acceptance letters. This includes profile assessment, university selection, application preparation, submission, and waiting for responses. Visa processing adds an additional 1-3 months.'
  },
  {
    question: 'Do you help with visa applications?',
    answer: 'Yes, we provide comprehensive visa assistance including document preparation, application filing, interview preparation, and follow-up support. Our experienced team guides you through the entire visa process.'
  },
  {
    question: 'What documents do I need to start the process?',
    answer: 'You will need your academic transcripts, degree certificates, passport, English proficiency test scores (IELTS/TOEFL), and any other standardized test scores (GRE/GMAT/SAT) if required. We can help you identify all necessary documents during the initial consultation.'
  },
  {
    question: 'Can you help with scholarship applications?',
    answer: 'Absolutely! We provide guidance on scholarship opportunities, help identify suitable scholarships based on your profile, and assist with scholarship application processes to maximize your chances of receiving financial aid.'
  },
  {
    question: 'What is your success rate?',
    answer: 'We maintain a high success rate with over 90% of our students receiving admission offers from their preferred universities. Our personalized approach and expert guidance contribute to this success.'
  },
  {
    question: 'Do you provide test preparation services?',
    answer: 'While we primarily focus on counseling and application assistance, we provide guidance on test preparation strategies, recommend resources, and help you plan your test preparation timeline. We can also refer you to specialized test preparation centers if needed.'
  },
  {
    question: 'How do I schedule a consultation?',
    answer: 'You can schedule a consultation by filling out our contact form, calling us directly, or messaging us on WhatsApp. We offer both in-person and online consultations to accommodate your preferences.'
  }
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-bold text-[#321e6c] text-lg">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#321e6c] transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-[#333333] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Our team is here to help. Get in touch with us today.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#321e6c] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
