import Link from "next/link";

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "50+", label: "Events Organized" },
  { value: "10+", label: "Years of Excellence" },
  { value: "25+", label: "Industry Partners" }
];

const themes = [
  {
    icon: "💡",
    title: "Innovation",
    description: "Fostering creativity and breakthrough thinking in technology solutions. Encouraging participants to think outside the box and develop innovative approaches to real-world problems."
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Building bridges between academia and industry. Creating opportunities for students, professionals, and researchers to collaborate and share knowledge."
  },
  {
    icon: "🏆",
    title: "Excellence",
    description: "Promoting the highest standards in technical education and professional development. Recognizing and celebrating outstanding achievements in technology."
  }
];

const eventCategories = [
  {
    icon: "💻",
    title: "Coding Competitions"
  },
  {
    icon: "🔬",
    title: "Project Exhibitions"
  },
  {
    icon: "🎤",
    title: "Tech Talks"
  },
  {
    icon: "🛠️",
    title: "Workshops"
  }
];

export default function ContentSection() {
  return (
    <>
      {/* ACM PCCoE Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About ACM PCCoE
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering the next generation of computer scientists and technologists
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Association for Computing Machinery
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                ACM PCCoE is the student chapter of the Association for Computing Machinery at Pimpri Chinchwad College of Engineering. We are dedicated to advancing computing as a science and profession, fostering innovation, and building a community of passionate technologists.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Promoting excellence in computer science education</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Organizing workshops, seminars, and technical events</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Building a network of computing professionals</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme and Purpose Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Theme & Purpose
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              "Innovation Beyond Boundaries" - Shaping the Future of Technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto text-2xl sm:text-3xl">
                  {theme.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">{theme.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base">{theme.description}</p>
              </div>
            ))}
          </div>

          {/* Event Categories */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">Event Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {eventCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 text-xl sm:text-2xl">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{category.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Be Part of Something Extraordinary?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Join us for three days of innovation, learning, and networking at Anantya 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold text-base sm:text-lg rounded-full hover:bg-gray-100 transition-colors"
            >
              Register Now
              <span className="ml-2 text-lg sm:text-xl">→</span>
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold text-base sm:text-lg rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
