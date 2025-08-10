import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Anantya 2025</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              The flagship technical fest of ACM PCCoE, bringing together the brightest minds in technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>PCCoE Campus, Pune</li>
              <li>info@anantya2025.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2025 Anantya - ACM PCCoE. All rights reserved.</p>
          <p className="mt-2 text-sm sm:text-base">
            Created by{" "}
            <a 
              href="https://github.com/kamlesh-creates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Kamlesh Satpute
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
