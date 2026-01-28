import type { Metadata } from 'next'
import Link from 'next/link'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Careers & Placement - ${INSTITUTION_NAME}`,
  description: 'Explore career opportunities and placement services at Crownbook Academy. We help students secure placements and build successful careers.',
}

export default function CareersPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Careers & Placement</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Your pathway to successful career opportunities and professional placements
            </p>
          </div>
        </div>
      </section>

      {/* Career Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#321e6c]">Our Career & Placement Services</h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                {INSTITUTION_NAME} provides comprehensive career guidance and placement support to help you achieve your professional goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Career Counseling */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#321e6c]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#321e6c]">Career Counseling</h3>
                </div>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Our expert career counselors help you identify your strengths, interests, and career goals to make informed decisions about your professional future.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized career assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Career pathway planning</span>
                  </li>
                </ul>
              </div>

              {/* Job Placement Assistance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#c1ac80]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#321e6c]">Job Placement Assistance</h3>
                </div>
                <p className="text-[#333333] leading-relaxed mb-4">
                  We connect you with top employers and help you secure placements in leading companies and institutions worldwide.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Resume and CV preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interview preparation and mock sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Employer network connections</span>
                  </li>
                </ul>
              </div>

              {/* Internship Opportunities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#321e6c]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#321e6c]">Internship Opportunities</h3>
                </div>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Gain valuable work experience through our network of internship opportunities with leading companies and organizations.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-specific internships</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>International internship placements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#321e6c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentorship and guidance</span>
                  </li>
                </ul>
              </div>

              {/* Professional Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#c1ac80]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#321e6c]">Professional Development</h3>
                </div>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Enhance your skills and professional profile through our comprehensive development programs and workshops.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Skill enhancement workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional networking events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c1ac80] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certification programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Placement Success</h2>
              <p className="text-xl text-white/90">
                Connecting students with top employers worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-xl text-white/90">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-xl text-white/90">Partner Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-xl text-white/90">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#321e6c]">How We Help You Succeed</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#321e6c]">1. Career Assessment & Planning</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  We begin with a comprehensive assessment of your skills, interests, and career goals. Our counselors work with you to create a personalized career development plan that aligns with your aspirations and the current job market.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#321e6c]">2. Skill Development & Training</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Through workshops, training sessions, and certification programs, we help you develop the skills employers are looking for. From technical skills to soft skills, we ensure you're job-ready.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#321e6c]">3. Resume & Interview Preparation</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Our team helps you create professional resumes and CVs that stand out. We also provide mock interview sessions and feedback to boost your confidence and improve your performance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#321e6c]">4. Job Placement & Networking</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Leveraging our extensive network of employers and industry partners, we connect you with relevant job opportunities. We also facilitate networking events to help you build professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Advance Your Career?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contact us today to learn more about our career and placement services.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#321e6c] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
