import type { Metadata } from 'next'
import { INSTITUTION_NAME } from '@/app/config/constants'

export const metadata: Metadata = {
  title: `Overseas Universities & Countries - ${INSTITUTION_NAME}`,
  description: 'Explore top universities and study destinations worldwide. Find the perfect country and university for your educational goals.',
}

const countries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    universities: ['Harvard University', 'MIT', 'Stanford University', 'Yale University'],
    description: 'Home to world-renowned universities offering diverse programs and research opportunities.'
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: ['Oxford University', 'Cambridge University', 'Imperial College', 'LSE'],
    description: 'Rich academic tradition with prestigious institutions and excellent research facilities.'
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    universities: ['University of Toronto', 'McGill University', 'UBC', 'University of Alberta'],
    description: 'High-quality education, welcoming environment, and excellent post-graduation opportunities.'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    universities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW'],
    description: 'Top-ranked universities with strong focus on research and innovation.'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    universities: ['Technical University of Munich', 'Heidelberg University', 'LMU Munich', 'Humboldt University'],
    description: 'Excellent engineering and technical programs, many with low or no tuition fees.'
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    universities: ['NUS', 'NTU', 'SMU', 'SUTD'],
    description: 'World-class education hub in Asia with strong industry connections.'
  }
]

export default function UniversitiesPage() {
  return (
    <div className="overflow-hidden">
      {/* Top Introductory Banner */}
      <section className="bg-[#321e6c] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Overseas Universities & Countries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Explore top study destinations and prestigious universities around the world
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{country.flag}</span>
                  <h2 className="text-2xl font-bold text-[#321e6c]">{country.name}</h2>
                </div>
                <p className="text-[#333333] mb-4 leading-relaxed">{country.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-[#321e6c] mb-2">Top Universities:</h3>
                  <ul className="space-y-2">
                    {country.universities.map((university, idx) => (
                      <li key={idx} className="text-sm text-[#333333] flex items-start">
                        <svg className="w-4 h-4 text-[#321e6c] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {university}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#321e6c]">Why Study Abroad?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Global Exposure</h3>
              <p className="text-[#333333] leading-relaxed">Experience different cultures, perspectives, and ways of learning that broaden your horizons.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Career Opportunities</h3>
              <p className="text-[#333333] leading-relaxed">Access to international job markets and networking opportunities with global professionals.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Quality Education</h3>
              <p className="text-[#333333] leading-relaxed">Study at world-renowned institutions with cutting-edge facilities and expert faculty.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#321e6c]">Personal Growth</h3>
              <p className="text-[#333333] leading-relaxed">Develop independence, adaptability, and cross-cultural communication skills.</p>
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
