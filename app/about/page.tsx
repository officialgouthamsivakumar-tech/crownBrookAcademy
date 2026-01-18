import type { Metadata } from 'next'
import Image from 'next/image'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `About Us - ${INSTITUTION_NAME}`,
  description: 'Learn about Crownbrook Academy and our mission to empower students through quality education and expert guidance.',
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white font-medium">
              "Transforming you to be a global leader through world-class education and real-world experience"
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-white flex items-center justify-center p-8">
                <Image
                  src="/logo.jpeg"
                  alt={`${INSTITUTION_NAME} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column - Mission & Vision */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#321e6c]">Our Mission</h2>
                <p className="text-lg text-[#333333] leading-relaxed">
                  {INSTITUTION_NAME} is dedicated to unlocking the potential of every student by providing personalized educational pathways that lead to prestigious universities worldwide. We believe that every individual deserves access to transformative learning experiences that shape not just careers, but character. Our mission centers on building bridges between ambitious students and their dream institutions, ensuring that financial constraints or geographical boundaries never limit educational aspirations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#321e6c]">Our Vision</h2>
                <p className="text-lg text-[#333333] leading-relaxed">
                  We envision {INSTITUTION_NAME} as the most trusted name in international education consulting, recognized for our unwavering commitment to student success. Our goal is to create a global network of empowered learners who become catalysts for positive change in their communities. We strive to be the institution that transforms educational dreams into tangible achievements, fostering a generation of leaders equipped with both knowledge and wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-16 bg-[#c1ac80]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Journey of {INSTITUTION_NAME}</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {INSTITUTION_NAME} emerged from a simple observation: talented students were missing opportunities due to lack of proper guidance and information. Our founders, having navigated their own international education journeys, understood the challenges firsthand. What started as informal mentorship sessions for friends and family members evolved into a comprehensive educational consultancy. Over the years, we've helped thousands of students discover their potential, secure scholarships, and gain admission to institutions they once thought were out of reach. Today, {INSTITUTION_NAME} stands as a testament to what dedicated support and expert guidance can achieve, with alumni now thriving in careers across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#321e6c]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Student-Centered Approach</h3>
              <p className="text-[#333333] leading-relaxed">
                At {INSTITUTION_NAME}, every decision we make prioritizes the success and well-being of our students. We take time to understand each student's unique goals, strengths, and challenges, crafting personalized pathways that align with their aspirations and maximize their potential for achievement.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Global Perspective</h3>
              <p className="text-[#333333] leading-relaxed">
                We recognize that education transcends borders. {INSTITUTION_NAME} equips students with a comprehensive understanding of international academic systems, cultural nuances, and global career opportunities, preparing them to thrive in an interconnected world.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Results-Driven Excellence</h3>
              <p className="text-[#333333] leading-relaxed">
                Success is measured by outcomes. {INSTITUTION_NAME} maintains rigorous standards throughout the application process, from initial consultation to final admission. We combine strategic planning, meticulous attention to detail, and proven methodologies to deliver exceptional results for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#321e6c]">Why Choose {INSTITUTION_NAME}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Expert Guidance</h3>
              <p className="text-[#333333] leading-relaxed">
                Our experienced counselors provide personalized guidance tailored to your goals and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Global Opportunities</h3>
              <p className="text-[#333333] leading-relaxed">
                Access to 500+ top universities and institutions across 50+ countries worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Guaranteed Placements</h3>
              <p className="text-[#333333] leading-relaxed">
                95% success rate with guaranteed admission assistance and visa support.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">24/7 Support</h3>
              <p className="text-[#333333] leading-relaxed">
                Round-the-clock assistance for all your queries and concerns throughout your journey.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Scholarship Assistance</h3>
              <p className="text-[#333333] leading-relaxed">
                Expert help in securing scholarships and financial aid to make education affordable.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#321e6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Career Counseling</h3>
              <p className="text-[#333333] leading-relaxed">
                Professional career guidance to help you choose the right path for your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#321e6c]">{INSTITUTION_NAME} and International Qualifications</h2>
            <div className="text-lg text-[#333333] leading-relaxed space-y-4">
              <p>
                {INSTITUTION_NAME} maintains strategic alliances with accredited educational institutions spanning North America, Europe, Asia-Pacific, and beyond. These carefully selected partnerships enable our students to pursue qualifications that carry global recognition and respect from academic institutions, professional licensing bodies, and multinational employers.
              </p>
              <p>
                Our role extends beyond simple placement services. We provide comprehensive academic preparation, application strategy development, and ongoing mentorship throughout the qualification process. All credentials are issued directly by our partner institutions, ensuring authenticity and international acceptance. Our preparation programs are designed to bridge any gaps between local educational systems and international requirements.
              </p>
              <p>
                Through various bilateral and multilateral recognition frameworks, the qualifications obtained through {INSTITUTION_NAME} pathways maintain full validity and equivalence across national boundaries. This ensures that our graduates can seamlessly continue their education or begin their careers anywhere in the world, with credentials that are universally respected and valued.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
