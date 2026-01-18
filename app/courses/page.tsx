import type { Metadata } from 'next'
import Link from 'next/link'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Courses & Services - ${INSTITUTION_NAME}`,
  description: 'Explore our comprehensive range of courses and educational services designed to help you achieve your academic goals.',
}

const courses = [
  {
    id: 1,
    title: 'Undergraduate Programs',
    description: 'Comprehensive guidance for undergraduate degree programs across various fields including Engineering, Business, Arts, and Sciences.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Course Selection', 'University Matching', 'Application Support', 'Scholarship Guidance']
  },
  {
    id: 2,
    title: 'Graduate Programs',
    description: 'Expert assistance for Master\'s and PhD programs with focus on research opportunities and academic excellence.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Research Guidance', 'Thesis Support', 'Academic Writing', 'Faculty Connections']
  },
  {
    id: 3,
    title: 'Professional Certifications',
    description: 'Guidance for professional certification programs that enhance your career prospects and skills.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M6.372 22.372A7.5 7.5 0 0112 2.5a7.5 7.5 0 015.628 19.872M6.372 22.372L2.5 26.254M21.5 26.254l-3.872-3.882M6.372 22.372A7.5 7.5 0 0112 2.5a7.5 7.5 0 015.628 19.872" />
      </svg>
    ),
    features: ['Industry Certifications', 'Skill Development', 'Career Advancement', 'Networking']
  },
  {
    id: 4,
    title: 'Language Training',
    description: 'IELTS, TOEFL, GRE, GMAT preparation and language proficiency training for international studies.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    features: ['Test Preparation', 'Language Courses', 'Practice Tests', 'Score Improvement']
  },
  {
    id: 5,
    title: 'Visa Assistance',
    description: 'Complete visa application support and documentation guidance for study abroad programs.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Documentation', 'Application Filing', 'Interview Preparation', 'Follow-up Support']
  },
  {
    id: 6,
    title: 'Career Counseling',
    description: 'Personalized career counseling to help you choose the right path and achieve your professional goals.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Career Assessment', 'Path Planning', 'Industry Insights', 'Mentorship']
  }
]

export default function CoursesPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Courses & Services</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive educational services designed to support your academic and career journey
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="text-[#321e6c]">
                    {course.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#321e6c] mb-4">{course.title}</h2>
                <p className="text-[#333333] mb-6 leading-relaxed">{course.description}</p>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-[#333333]">
                      <svg className="w-5 h-5 text-[#321e6c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#321e6c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a1a5a] transition shadow-md w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Contact us today to learn more about our courses and services.</p>
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
