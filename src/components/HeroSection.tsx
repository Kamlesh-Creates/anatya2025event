import Link from "next/link";

const eventDetails = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    title: "Date",
    value: "August 18-19, 2025"
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Time",
    value: "9:00 AM - 6:00 PM"
  },
  {
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    title: "Venue",
    value: "PCCoE Campus, Pimpri-Chinchwad"
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    title: "Participants",
    value: "500+ Expected"
  }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/CG8xx7ndQgJrQ2SeC8CgZ_dYZwIZ0eNjmTinFoPaqH0/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5w/Y2NvZXB1bmUuY29t/L2ltYWdlcy9zbGlk/ZXIvY2FtcHVzLXBp/bXByaS1jaGluY2hh/d2FkLWNvbGxlZ2Ut/b2YtZW5naW5lZXJp/bmctMy53ZWJw')`
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anantya 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            The Ultimate Technical Fest - Where Innovation Meets Excellence
          </p>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-4xl mx-auto shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventDetails.map((detail, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {detail.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{detail.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Link 
            href="/register" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Register Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
