import type { Metadata } from 'next'
import Image from 'next/image'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Partner Universities - ${INSTITUTION_NAME}`,
  description: 'Explore our partner universities and study destinations. Connect with top institutions in the UK and Malaysia.',
}

const partnerUniversities = [
  {
    name: 'Cardiff Metropolitan University',
    country: 'United Kingdom',
    flag: '🇬🇧',
    logo: '/cardiff.png',
    location: 'Cardiff, Wales, UK',
    description: 'A leading public university in Wales, known for its strong focus on professional and vocational education, research excellence, and industry partnerships.',
    highlights: [
      'Ranked among top UK universities',
      'Strong industry connections and employability focus',
      'Modern facilities and innovative teaching methods',
      'Diverse range of undergraduate and postgraduate programs',
      'Excellent student support services'
    ],
    programs: [
      'Business & Management',
      'Technology & Computing',
      'Hospitality & Tourism',
      'Health Sciences',
      'Education',
      'Sports Science'
    ]
  },
  {
    name: 'University of Plymouth',
    country: 'United Kingdom',
    flag: '🇬🇧',
    logo: '/plymouth.png',
    location: 'Plymouth, England, UK',
    description: 'A dynamic and innovative university with a strong reputation for research, teaching excellence, and student satisfaction. Located in the vibrant coastal city of Plymouth.',
    highlights: [
      'Top 50 UK university for research quality',
      'Strong focus on sustainability and marine sciences',
      'Excellent graduate employment rates',
      'Modern campus with state-of-the-art facilities',
      'Vibrant student community and city life'
    ],
    programs: [
      'Business & Management',
      'Engineering & Technology',
      'Marine Sciences',
      'Health & Social Care',
      'Arts & Humanities',
      'Environmental Sciences'
    ]
  },
  {
    name: 'Lincoln University Malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    logo: '/lincoln.png',
    location: 'Selangor, Malaysia',
    description: 'A prestigious international university offering world-class education with a focus on innovation, research, and global perspectives. Part of the Lincoln University network.',
    highlights: [
      'International recognition and accreditation',
      'Affordable tuition fees with high-quality education',
      'Multicultural learning environment',
      'Strong industry partnerships in Asia',
      'Pathway to global career opportunities'
    ],
    programs: [
      'Business Administration',
      'Information Technology',
      'Engineering',
      'Hospitality Management',
      'Education',
      'Arts & Design'
    ]
  }
]

export default function UniversitiesPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Partner Universities</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Connect with prestigious institutions in the UK and Malaysia through our established partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {partnerUniversities.map((university, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Logo and Basic Info */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative w-48 h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                      <Image
                        src={university.logo}
                        alt={university.name}
                        width={200}
                        height={120}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        <span className="text-3xl mr-2">{university.flag}</span>
                        <span className="text-sm font-semibold text-[#321e6c]">{university.country}</span>
                      </div>
                      <p className="text-sm text-[#333333]">{university.location}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#321e6c]">{university.name}</h2>
                    <p className="text-lg text-[#333333] mb-6 leading-relaxed">{university.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Key Highlights</h3>
                      <ul className="space-y-2">
                        {university.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-[#333333]">
                            <svg className="w-5 h-5 text-[#c1ac80] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Programs */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Available Programs</h3>
                      <div className="flex flex-wrap gap-2">
                        {university.programs.map((program, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-[#321e6c] to-[#4a2d8a] text-white rounded-lg text-sm font-semibold"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Partner Universities Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#321e6c]">Why Choose Our Partner Universities?</h2>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                Our partnerships ensure seamless transfers, credit recognition, and dedicated support throughout your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#321e6c] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Guaranteed Credit Transfer</h3>
                <p className="text-[#333333] leading-relaxed">Seamless transfer of credits from {INSTITUTION_NAME} to partner universities with no loss of academic progress.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#c1ac80] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Cost Savings</h3>
                <p className="text-[#333333] leading-relaxed">Save up to 70-80% on tuition fees by completing initial years in India before transferring abroad.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#321e6c] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Dedicated Support</h3>
                <p className="text-[#333333] leading-relaxed">Comprehensive assistance with applications, visas, accommodation, and academic transition.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#c1ac80] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Internationally Recognized Degrees</h3>
                <p className="text-[#333333] leading-relaxed">Receive the same degree certificate as students who studied fully abroad, with full global recognition.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#321e6c] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Global Career Opportunities</h3>
                <p className="text-[#333333] leading-relaxed">Access to international job markets and networking opportunities with global professionals and employers.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#c1ac80] flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Quality Education</h3>
                <p className="text-[#333333] leading-relaxed">Study at world-renowned institutions with cutting-edge facilities, expert faculty, and innovative teaching methods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need Help Choosing the Right University?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Our expert counselors can help you find the perfect match for your academic and career goals.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#321e6c] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-lg"
            >
              Get Expert Guidance
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
