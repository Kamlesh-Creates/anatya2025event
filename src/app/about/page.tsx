import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navigation showAdmin={false} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About ACM PCCoE & Anantya
          </h1>

          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Introduction to ACM and the Anantya Event The Association for Computing Machinery (ACM) is the world&apos;s
              largest educational and scientific computing society, uniting computing educators, researchers, and
              professionals. The ACM PCCoE Student Chapter organizes various technical and non-technical events to
              promote innovation, peer learning, and community engagement. Anantya is ACM PCCoE&apos;s flagship event that
              includes a range of competitions, workshops, and tech showcases.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/30">
              <h3 className="font-semibold text-gray-900 dark:text-white">Global Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ACM connects educators, researchers, and professionals worldwide.</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/30">
              <h3 className="font-semibold text-gray-900 dark:text-white">Student Innovation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ACM PCCoE encourages peer learning and hands-on events.</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/30">
              <h3 className="font-semibold text-gray-900 dark:text-white">Anantya</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Our flagship fest with competitions, workshops, and showcases.</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/register" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register for Anantya
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
