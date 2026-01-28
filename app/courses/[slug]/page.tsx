import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { INSTITUTION_NAME } from '@/app/config/constants'

// Course data with full details
const courseDetails: Record<string, any> = {
  'international-diploma-quality-teaching-learning': {
    title: 'International Diploma in Quality Teaching & Learning',
    subtitle: 'UK Level 6 & Level 7 Qualification',
    tagline: 'Creating Outstanding Teachers for Top Schools Worldwide',
    description: 'Delivered by CrownBook Academy, this internationally aligned diploma is designed to transform passionate educators into globally competent, highly employable teachers.',
    overview: {
      title: 'Course Overview',
      content: [
        'The International Diploma in Quality Teaching & Learning (UK Level 6 & 7) is a comprehensive teacher upskilling and qualification program aligned with international school standards.',
        'The program empowers educators with advanced pedagogy, classroom excellence, and global teaching certifications, enabling them to succeed in top schools in India and abroad.'
      ]
    },
    whoFor: [
      'B.Ed / M.Ed holders',
      'Experienced teachers seeking international opportunities',
      'Aspiring international school educators',
      'Teachers aiming for leadership and curriculum roles'
    ],
    whatYouGain: [
      {
        title: 'World-Class Teaching Pedagogy',
        items: [
          'Modern learner-centered teaching strategies',
          'Inclusive education and differentiated instruction',
          'Assessment for learning (AfL) & outcome-based education',
          'Classroom management for multicultural environments'
        ]
      },
      {
        title: 'Internationally Recognized Qualification',
        items: [
          'UK Level 6 & Level 7 diploma framework',
          'Globally accepted academic and professional standards',
          'Strong foundation for teaching in international, IB, British & Cambridge schools'
        ]
      },
      {
        title: 'Classroom Excellence for Any Country',
        items: [
          'Teaching across diverse curricula and cultures',
          'Technology-integrated teaching and digital classrooms',
          'Student engagement, behavior management & wellbeing'
        ]
      }
    ],
    careerSupport: [
      {
        title: 'Professional Job Profile Development',
        items: [
          'International-standard CV & teaching portfolio',
          'Statement of teaching philosophy',
          'Classroom observation & teaching practice guidance'
        ]
      },
      {
        title: 'Interview & Placement Guidance',
        items: [
          'Mock interviews aligned to international school hiring standards',
          'Interview preparation for UK, Middle East, Europe & Asia',
          'Guidance on demo classes and lesson planning'
        ]
      },
      {
        title: 'Career Progression Support',
        items: [
          'Support for school placement pathways',
          'Guidance for promotions, leadership roles & further study'
        ]
      }
    ],
    whyChoose: [
      'UK-aligned Level 6 & 7 qualification',
      'Practical, classroom-focused learning',
      'Designed for global teaching careers',
      'Strong employability and career mentoring support',
      'Ideal for teachers aiming for top-tier schools'
    ],
    outcome: 'Graduates emerge as confident, certified, and globally employable educators, equipped to teach, lead, and inspire in high-quality schools worldwide.'
  },
  'tefl-teaching-english-foreign-language': {
    title: 'TEFL – Teaching English as a Foreign Language',
    subtitle: 'International Certification for Global English Teaching Careers',
    tagline: 'Teach English. Travel the World. Build a Global Career.',
    description: 'Offered by CrownBook Academy, the TEFL program prepares aspiring and experienced educators to teach English confidently anywhere in the world—in schools, language centers, and online classrooms.',
    overview: {
      title: 'Course Overview',
      content: [
        'The TEFL (Teaching English as a Foreign Language) certification is a globally recognized qualification that enables you to teach English to non-native speakers across Asia, Europe, the Middle East, Africa, and Latin America.',
        'This course focuses on practical teaching skills, international classroom methodologies, and real-world lesson delivery, ensuring graduates are job-ready from day one.'
      ]
    },
    whoFor: [
      'Aspiring English teachers with no prior experience',
      'Qualified teachers seeking international teaching roles',
      'Graduates planning to work or travel abroad',
      'Professionals aiming for flexible online teaching careers'
    ],
    whatYouGain: [
      {
        title: 'Core TEFL Methodology',
        items: [
          'Communicative language teaching (CLT)',
          'Lesson planning & classroom management',
          'Teaching grammar, vocabulary, reading, writing & speaking',
          'Error correction and student assessment'
        ]
      },
      {
        title: 'Teaching Diverse Learners',
        items: [
          'Teaching young learners, teens & adults',
          'One-to-one and group teaching strategies',
          'Managing multicultural and multilingual classrooms'
        ]
      },
      {
        title: 'Practical Teaching Skills',
        items: [
          'Live teaching practice & observed lessons',
          'Classroom confidence and student engagement',
          'Using teaching aids, games & digital tools'
        ]
      },
      {
        title: 'Online & Digital English Teaching',
        items: [
          'Teaching English online (1:1 and group classes)',
          'Using virtual classrooms and LMS platforms',
          'Building an online teacher profile'
        ]
      }
    ],
    certification: [
      'Internationally accepted TEFL certification',
      'Accepted by language schools and employers worldwide',
      'Suitable for in-classroom and online teaching roles'
    ],
    careerSupport: [
      {
        title: 'Global Job Readiness',
        items: [
          'International CV and cover letter preparation',
          'Demo class and interview preparation',
          'Guidance on job applications worldwide'
        ]
      },
      {
        title: 'Teaching Opportunities',
        items: [
          'Language schools and international schools',
          'Corporate English training',
          'Online teaching platforms',
          'Summer schools and travel-based teaching roles'
        ]
      }
    ],
    whyChoose: [
      'Globally recognized certification',
      'Practical, hands-on training approach',
      'Flexible study options (online / blended)',
      'Strong career mentoring & interview guidance',
      'Pathways to international teaching careers'
    ],
    careerOutcomes: [
      'English Language Teachers (ESL/EFL)',
      'Online English Tutors',
      'International School Language Teachers',
      'Corporate English Trainers'
    ]
  },
  'international-diploma-hotel-management': {
    title: 'International Diploma in Hotel Management',
    subtitle: 'UK Level 4 & Level 5 Qualification',
    tagline: 'Build a Global Career in Hospitality & Tourism',
    description: 'This internationally aligned diploma prepares students for leadership roles in the global hospitality industry, combining academic excellence with practical industry exposure.',
    highlights: [
      'UK Level 4 & 5 international qualification',
      'Curriculum aligned with global hotel chains and resorts',
      'Strong foundation in hotel operations & management',
      "Pathway to final-year Bachelor's or Master's degrees abroad"
    ],
    careerOutcomes: [
      'Hotel Manager',
      'Resort Operations Executive',
      'Food & Beverage Manager',
      'Hospitality Supervisor',
      'Cruise & Tourism Roles'
    ]
  },
  'international-certificate-hospitality-management': {
    title: 'International Certificate in Hospitality Management',
    subtitle: 'Fast-track certification for hospitality professionals',
    tagline: 'Quick Global Recognition for Hospitality Excellence',
    description: 'Designed for students and working professionals seeking quick global recognition, this program focuses on essential hospitality management skills.',
    whatYouLearn: [
      'Front office & guest relations',
      'Hospitality operations & service excellence',
      'International hospitality standards',
      'Career readiness for global roles'
    ]
  },
  'uk-pathway-programs': {
    title: 'UK Pathway Programs – Technology & Business Management',
    subtitle: 'Study Year 1 & Year 2 with Us. Graduate in the UK.',
    tagline: 'Earn a Full UK Degree with Significant Cost Savings',
    description: 'Our UK pathway programs allow students to complete the first and second year in India at CrownBook Academy and transfer to the UK for the final year, earning a full UK degree.',
    pathways: [
      'Cyber Security',
      'Data Science',
      'Information Technology (IT)',
      'Business Management'
    ],
    whyWorks: [
      'Up to 70–80% savings on tuition costs',
      'UK-aligned curriculum and credit transfer',
      'Same UK degree as students studying fully in the UK',
      'Smooth academic and visa transition support'
    ]
  },
  'postgraduate-diploma-mba-pathway': {
    title: 'Postgraduate Diploma + MBA Pathway (UK)',
    subtitle: 'PG Diploma with MBA from Cardiff Metropolitan University',
    tagline: 'Accelerate Your Global Management Career',
    description: 'This unique pathway enables students to complete a Postgraduate Diploma followed by a Master of Business Administration (MBA) awarded by a leading UK public university.',
    benefits: [
      'Internationally recognized UK MBA qualification',
      'Strong focus on leadership, strategy & global business',
      'Ideal for professionals aiming for managerial & leadership roles',
      'Enhances employability across global markets'
    ],
    careerProgression: [
      'Business Manager',
      'Operations Manager',
      'Strategy Consultant',
      'International Business Executive',
      'Entrepreneur'
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = courseDetails[slug]
  
  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  return {
    title: `${course.title} - ${INSTITUTION_NAME}`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courseDetails[slug]

  if (!course) {
    notFound()
  }

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Courses
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{course.title}</h1>
            {course.subtitle && (
              <p className="text-xl md:text-2xl font-semibold mb-4 text-white/90">{course.subtitle}</p>
            )}
            {course.tagline && (
              <p className="text-2xl md:text-3xl font-bold mb-6 text-[#c1ac80]">{course.tagline}</p>
            )}
            <p className="text-lg text-white/90 leading-relaxed">{course.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Course Overview */}
          {course.overview && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#321e6c]">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">{course.overview.title}</h2>
              {course.overview.content.map((para: string, index: number) => (
                <p key={index} className="text-lg text-[#333333] mb-4 leading-relaxed">{para}</p>
              ))}
            </section>
          )}

          {/* Who This Course Is For */}
          {course.whoFor && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">Who This Course Is For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whoFor.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#321e6c] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-[#333333] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What You Will Gain/Learn */}
          {course.whatYouGain && (
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-[#321e6c]">What You Will Gain</h2>
              <div className="space-y-8">
                {course.whatYouGain.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#321e6c]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#321e6c]">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.items.map((listItem: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-[#333333]">
                          <svg className="w-5 h-5 text-[#c1ac80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What You Learn (for Hospitality Certificate) */}
          {course.whatYouLearn && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.whatYouLearn.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#c1ac80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[#333333] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Highlights */}
          {course.highlights && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.highlights.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#321e6c] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-[#333333] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certification & Recognition */}
          {course.certification && (
            <section className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-2xl p-8 md:p-10 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Certification & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {course.certification.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#c1ac80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Career & Employability Support */}
          {course.careerSupport && (
            <section className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-2xl p-8 md:p-10 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Career & Employability Support</h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">We go beyond certification to ensure real career outcomes.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {course.careerSupport.map((item: any, index: number) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6 text-[#c1ac80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <ul className="space-y-2 text-white/90">
                      {item.items.map((listItem: string, idx: number) => (
                        <li key={idx}>• {listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Why Choose */}
          {course.whyChoose && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">Why Choose This Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.whyChoose.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#321e6c] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-[#333333] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Career Outcomes */}
          {(course.careerOutcomes || course.careerProgression) && (
            <section className="bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-2xl p-8 md:p-10 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Career Outcomes</h2>
              <div className="flex flex-wrap gap-4">
                {(course.careerOutcomes || course.careerProgression).map((item: string, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcome */}
          {course.outcome && (
            <section className="bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-2xl p-8 md:p-10 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Outcome</h2>
              <p className="text-xl leading-relaxed">{course.outcome}</p>
            </section>
          )}

          {/* Pathways (for UK Pathway Programs) */}
          {course.pathways && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">Available Pathways</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {course.pathways.map((item: string, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-xl p-6 text-white text-center">
                    <h3 className="text-xl font-bold">{item}</h3>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Why This Pathway Works */}
          {course.whyWorks && (
            <section className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-2xl p-8 md:p-10 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Why This Pathway Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.whyWorks.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#c1ac80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits (for MBA Pathway) */}
          {course.benefits && (
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#321e6c]">
              <h2 className="text-3xl font-bold mb-6 text-[#321e6c]">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.benefits.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#321e6c] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-[#333333] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#321e6c]">
              Ready to Enroll?
            </h2>
            <p className="text-xl text-[#333333] mb-8">
              Get in touch with us to learn more about this course and start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#321e6c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2a1a5a] transition shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/courses"
                className="inline-block bg-transparent border-2 border-[#321e6c] text-[#321e6c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#321e6c] hover:text-white transition"
              >
                View All Courses
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
