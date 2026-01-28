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
    slug: 'international-diploma-quality-teaching-learning',
    title: 'International Diploma in Quality Teaching & Learning',
    subtitle: 'UK Level 6 & Level 7 Qualification',
    description: 'Creating Outstanding Teachers for Top Schools Worldwide. Delivered by CrownBook Academy, this internationally aligned diploma is designed to transform passionate educators into globally competent, highly employable teachers.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['World-Class Teaching Pedagogy', 'Internationally Recognized Qualification', 'Classroom Excellence', 'Career & Employability Support']
  },
  {
    id: 2,
    slug: 'tefl-teaching-english-foreign-language',
    title: 'TEFL – Teaching English as a Foreign Language',
    subtitle: 'International Certification for Global English Teaching Careers',
    description: 'Offered by CrownBook Academy, the TEFL program prepares aspiring and experienced educators to teach English confidently anywhere in the world—in schools, language centers, and online classrooms.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    features: ['Core TEFL Methodology', 'Teaching Diverse Learners', 'Practical Teaching Skills', 'Online & Digital English Teaching']
  },
  {
    id: 3,
    slug: 'international-diploma-hotel-management',
    title: 'International Diploma in Hotel Management',
    subtitle: 'UK Level 4 & Level 5 Qualification',
    description: 'Build a Global Career in Hospitality & Tourism. This internationally aligned diploma prepares students for leadership roles in the global hospitality industry, combining academic excellence with practical industry exposure.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['UK Level 4 & 5 Qualification', 'Global Hotel Chains Alignment', 'Hotel Operations & Management', 'Pathway to Bachelor\'s or Master\'s']
  },
  {
    id: 4,
    slug: 'international-certificate-hospitality-management',
    title: 'International Certificate in Hospitality Management',
    subtitle: 'Fast-track certification for hospitality professionals',
    description: 'Designed for students and working professionals seeking quick global recognition, this program focuses on essential hospitality management skills.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    features: ['Front Office & Guest Relations', 'Hospitality Operations', 'International Standards', 'Career Readiness']
  },
  {
    id: 5,
    slug: 'uk-pathway-programs',
    title: 'UK Pathway Programs – Technology & Business Management',
    subtitle: 'Study Year 1 & Year 2 with Us. Graduate in the UK.',
    description: 'Our UK pathway programs allow students to complete the first and second year in India at CrownBook Academy and transfer to the UK for the final year, earning a full UK degree.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Cyber Security', 'Data Science', 'Information Technology', 'Business Management']
  },
  {
    id: 6,
    slug: 'postgraduate-diploma-mba-pathway',
    title: 'Postgraduate Diploma + MBA Pathway (UK)',
    subtitle: 'PG Diploma with MBA from Cardiff Metropolitan University',
    description: 'Accelerate Your Global Management Career. This unique pathway enables students to complete a Postgraduate Diploma followed by a Master of Business Administration (MBA) awarded by a leading UK public university.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['UK MBA Qualification', 'Leadership & Strategy Focus', 'Managerial Roles', 'Global Market Employability']
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

      {/* Courses Grid Section */}
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
                <h2 className="text-2xl font-bold text-[#321e6c] mb-2">{course.title}</h2>
                {course.subtitle && (
                  <p className="text-sm font-semibold text-[#c1ac80] mb-4">{course.subtitle}</p>
                )}
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
                  href={`/courses/${course.slug}`}
                  className="inline-block bg-[#321e6c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a1a5a] transition-all duration-300 shadow-md w-full text-center button-click-animation hover:scale-105 active:scale-95"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
