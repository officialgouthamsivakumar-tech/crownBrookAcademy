import type { Metadata } from 'next'
import Link from 'next/link'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Admission Process - ${INSTITUTION_NAME}`,
  description: 'Step-by-step guide to the admission process. Learn how to apply and get accepted to your dream university.',
}

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'Schedule a free consultation with our expert counselors to discuss your goals, interests, and academic background.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: 2,
    title: 'Profile Assessment',
    description: 'We assess your academic profile, test scores, and preferences to identify the best-fit universities and programs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: 3,
    title: 'University Selection',
    description: 'Based on your profile, we help you shortlist universities that match your academic goals and career aspirations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    number: 4,
    title: 'Application Preparation',
    description: 'We assist you in preparing all required documents including transcripts, recommendation letters, and essays.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: 5,
    title: 'Application Submission',
    description: 'We guide you through the application process and ensure all documents are submitted correctly and on time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    number: 6,
    title: 'Interview Preparation',
    description: 'We provide comprehensive interview preparation to help you present yourself confidently to admission committees.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    number: 7,
    title: 'Visa Processing',
    description: 'Once accepted, we assist with visa application, documentation, and interview preparation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: 8,
    title: 'Pre-Departure Support',
    description: 'We provide guidance on accommodation, travel arrangements, and what to expect in your new country.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
]

export default function AdmissionPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Admission Process</h1>
            <p className="text-xl md:text-2xl text-white/90">
              A comprehensive step-by-step guide to help you navigate the admission process successfully
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#321e6c] text-white rounded-full text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center mb-2">
                      <div className="text-[#321e6c] mr-3">
                        {step.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-[#321e6c]">{step.title}</h2>
                    </div>
                    <p className="text-lg text-[#333333] leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-8 mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-[#321e6c]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#321e6c]">General Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#321e6c]">Academic Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Academic transcripts
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Degree certificates
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Recommendation letters
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Statement of Purpose
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#321e6c]">Test Scores</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  IELTS/TOEFL (English proficiency)
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  GRE/GMAT (if required)
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  SAT/ACT (for undergraduate)
                </li>
                <li className="flex items-start text-[#333333]">
                  <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Other standardized tests
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Admission Journey?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Get expert guidance from our experienced counselors today.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#321e6c] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
