import Link from 'next/link'

export default function CourseNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#321e6c] mb-4">Course Not Found</h1>
        <p className="text-lg text-[#333333] mb-8">The course you're looking for doesn't exist.</p>
        <Link
          href="/courses"
          className="inline-block bg-[#321e6c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a1a5a] transition"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}
