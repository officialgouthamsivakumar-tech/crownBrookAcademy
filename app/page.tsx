'use client'

import Link from 'next/link'
import Image from 'next/image'
import { INSTITUTION_NAME, INSTITUTION_PHONE, INSTITUTION_WHATSAPP } from './config/constants'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg1.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#321e6c]/85"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Transform Your Future with
                <span className="block mt-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37' }}>
                  {INSTITUTION_NAME}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Empowering students worldwide to achieve their dreams through quality education, 
                expert guidance, and guaranteed placements at top universities globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/admission"
                  className="group bg-white text-[#321e6c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
                >
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm"
                >
                  Get Free Consultation
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
                  <div className="text-white/80 text-sm md:text-base">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80 text-sm md:text-base">University Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80 text-sm md:text-base">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm md:text-base">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#321e6c] mb-8 text-sm font-semibold uppercase tracking-wider">Trusted by Leading Institutions</p>
          
          {/* Scrolling Logos */}
          <div className="overflow-hidden">
            {/* Scrolling Container - Single container with duplicated content for seamless loop */}
            <div className="flex gap-16 items-center animate-scroll">
              {/* Universities Array - Repeated multiple times for seamless scrolling */}
              {[
                { name: 'Cardiff Metropolitan University', logo: '/cardiff.png' },
                { name: 'University of Plymouth', logo: '/plymouth.png' },
                { name: 'Lincoln University Malaysia', logo: '/lincoln.png' },
                // Duplicate for seamless loop
                { name: 'Cardiff Metropolitan University', logo: '/cardiff.png' },
                { name: 'University of Plymouth', logo: '/plymouth.png' },
                { name: 'Lincoln University Malaysia', logo: '/lincoln.png' },
                // Another duplicate for smoother animation
                { name: 'Cardiff Metropolitan University', logo: '/cardiff.png' },
                { name: 'University of Plymouth', logo: '/plymouth.png' },
                { name: 'Lincoln University Malaysia', logo: '/lincoln.png' }
              ].map((uni, i) => (
                <div 
                  key={`uni-${i}`} 
                  className="flex-shrink-0 w-48 h-28 flex items-center justify-center group"
                >
                  <Image 
                    src={uni.logo} 
                    alt={uni.name}
                    width={180}
                    height={100}
                    className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - UG/Bachelor's Pathway */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#321e6c]">
                How It Works (UG / Bachelor's Pathway)
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#321e6c]">
                Start Your Bachelor's Degree the Smart Way
              </h3>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
                Begin at {INSTITUTION_NAME} (CBA). Graduate from a Top Global University.
              </p>
              <p className="text-lg text-[#333333] max-w-4xl mx-auto mt-4 leading-relaxed">
                CBA's Undergraduate Pathway is designed for ambitious students who want world-class education, global exposure, and major cost savings—without compromising on quality or recognition.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-12 mb-16">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#321e6c]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#321e6c]">
                      Start Year 1 at CBA (India)
                    </h4>
                    <p className="text-lg text-[#333333] mb-4 leading-relaxed">
                      Build a strong academic foundation from day one.
                    </p>
                    <p className="text-[#333333] mb-4 leading-relaxed">
                      CBA offers a Common First-Year Curriculum that is carefully aligned with the academic standards of top-ranked international universities—many ranked above IITs.
                    </p>
                    <p className="text-[#333333] font-semibold mb-3">This year focuses on:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#333333] mb-4 ml-4">
                      <li>Core academic subjects</li>
                      <li>Critical thinking and research skills</li>
                      <li>Academic English and university readiness</li>
                      <li>Global curriculum mapping</li>
                    </ul>
                    <p className="text-[#333333] leading-relaxed">
                      After completing Year 1 at CBA, students can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#333333] mt-2 ml-4">
                      <li>Progress to Year 2 at CBA (India), or</li>
                      <li>Move directly to Year 2 abroad, depending on pathway selection</li>
                    </ul>
                    <p className="text-[#333333] italic mt-4 leading-relaxed">
                      A smart, flexible start for a powerful global future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#c1ac80]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#c1ac80] to-[#d4b890] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#321e6c]">
                      Year 2 at CBA (Optional – India)
                    </h4>
                    <p className="text-lg text-[#333333] mb-4 leading-relaxed">
                      Customize your pathway before going global.
                    </p>
                    <p className="text-[#333333] font-semibold mb-3">In Year 2, students:</p>
                    <ul className="list-disc list-inside space-y-2 text-[#333333] mb-4 ml-4">
                      <li>Select a partner university and country</li>
                      <li>Study university-specific subjects delivered by CBA</li>
                      <li>Align fully with the chosen degree structure</li>
                    </ul>
                    <p className="text-[#333333] leading-relaxed mb-3">
                      After Year 2, students can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#333333] mb-4 ml-4">
                      <li>Enter the final year of a 3-year Bachelor's degree, or</li>
                      <li>Continue Years 3 & 4 of a 4-year Bachelor's program</li>
                      <li>Access Integrated Master's pathways, completing Bachelor's + Master's in 4 to 4.5 years</li>
                    </ul>
                    <p className="text-[#333333] italic mt-4 leading-relaxed">
                      This stage ensures a smooth academic and credit transfer with no loss of time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-[#321e6c]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#321e6c]">
                      Transfer Abroad (Mandatory After 2 Years)
                    </h4>
                    <p className="text-lg text-[#333333] mb-4 leading-relaxed">
                      Graduate overseas. Save up to 80% on tuition.
                    </p>
                    <p className="text-[#333333] mb-4 leading-relaxed">
                      After completing two years at CBA, students transfer abroad to complete their final year(s) at a partner university.
                    </p>
                    <p className="text-[#333333] font-semibold mb-3">Key Benefits</p>
                    <ul className="list-disc list-inside space-y-2 text-[#333333] mb-4 ml-4">
                      <li>Up to 80% savings on international tuition fees</li>
                      <li>Same degree certificate as students who studied fully abroad</li>
                      <li>Degree awarded directly by the transfer university</li>
                      <li>Full international student status and global recognition</li>
                    </ul>
                    <p className="text-[#333333] italic mt-4 leading-relaxed">
                      You study smart in India, then graduate global—without the heavy financial burden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Pathway Works */}
            <div className="bg-gradient-to-br from-[#321e6c] to-[#4a2d8a] rounded-2xl p-8 md:p-12 text-white">
              <h4 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why This Pathway Works
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Internationally aligned curriculum',
                  'Flexible study options (India or Abroad)',
                  'Massive cost savings',
                  'Faster Bachelor\'s + Master\'s completion',
                  'Degrees from globally ranked universities'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#c1ac80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#321e6c]">Why Choose {INSTITUTION_NAME}?</h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              We provide comprehensive support at every step of your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Expert Guidance',
                description: 'Our experienced counselors provide personalized guidance tailored to your goals and aspirations.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: 'Global Opportunities',
                description: 'Access to 500+ top universities and institutions across 50+ countries worldwide.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Guaranteed Placements',
                description: '95% success rate with guaranteed admission assistance and visa support.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 Support',
                description: 'Round-the-clock assistance for all your queries and concerns throughout your journey.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Scholarship Assistance',
                description: 'Expert help in securing scholarships and financial aid to make education affordable.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Career Counseling',
                description: 'Professional career guidance to help you choose the right path for your future.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-[#321e6c]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#321e6c]">{feature.title}</h3>
                <p className="text-[#333333] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
