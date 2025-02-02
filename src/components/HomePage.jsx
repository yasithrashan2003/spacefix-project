import React, { useState } from 'react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-slate-50 border-b border-slate-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Responsive on all screens */}
            <div className="flex items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-bold text-slate-800">SPACEFIX</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-emerald-700 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Contact Us
              </button>
              <a href="#" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">
                Student Hub
              </a>
              <button className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors">
                Admin Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-emerald-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-emerald-700 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Contact Us
              </button>
              <a href="#" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">
                Student Hub
              </a>
              <button className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors">
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Responsive */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-emerald-900 opacity-95"></div>
        <div className="relative bg-cover bg-center py-16 md:py-24 lg:py-32" style={{
          backgroundImage: "url('/api/placeholder/1920/1080')"
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8 tracking-tight">
                University Management
                <span className="block mt-2 text-emerald-400">Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                A sophisticated platform designed to streamline academic operations and enhance institutional efficiency.
              </p>
              <div className="space-x-4 md:space-x-6">
                <button className="bg-emerald-600 text-white px-6 md:px-8 py-2 md:py-3 rounded font-medium hover:bg-emerald-700 transition-colors text-sm md:text-base">
                  Get Started
                </button>
                <button className="bg-slate-800 text-white px-6 md:px-8 py-2 md:py-3 rounded font-medium hover:bg-slate-700 transition-colors text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section - Responsive
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
        <div className="bg-white rounded shadow-lg p-4 md:p-6 border border-slate-100">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Search courses, programs, or resources..."
              className="flex-1 p-2 md:p-3 border border-slate-200 rounded text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            <button className="bg-slate-800 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-slate-700 transition-colors text-sm md:text-base">
              Search
            </button>
          </div>
        </div>
      </div> */}

      {/* About Us Section - Responsive */}
      <section id="about" className="py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8 md:mb-12">Our Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-emerald-600 text-xl md:text-2xl mb-3 md:mb-4">📍</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-slate-600 text-sm md:text-base">Track students and resources in real-time across your campus with our advanced tracking system.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="text-emerald-600 text-xl md:text-2xl mb-3 md:mb-4">🗺️</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Mini Map Navigation</h3>
              <p className="text-slate-600 text-sm md:text-base">Interactive campus map with intuitive navigation to help students find their way around.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="text-emerald-600 text-xl md:text-2xl mb-3 md:mb-4">📅</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Space Reservation</h3>
              <p className="text-slate-600 text-sm md:text-base">Easy-to-use space booking system for students to reserve study rooms, labs, and facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Responsive */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8 md:mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-slate-600 text-sm md:text-base">+1 (555) 123-4567</p>
                <p className="text-slate-600 text-sm md:text-base">support@spacefix.com</p>
              </div>
              <div className="flex justify-center space-x-4 md:space-x-6">
                {/* Social Media Icons */}
                {/* ... (previous social media icons remain the same) ... */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-slate-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-4">SPACEFIX</h3>
              <p className="text-slate-400 text-sm md:text-base">Making university space management smarter and more efficient.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white text-sm md:text-base">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-sm md:text-base">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-sm md:text-base">FAQ</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left lg:col-span-1">
              <h3 className="text-base md:text-lg font-semibold mb-4">Address</h3>
              <p className="text-slate-400 text-sm md:text-base">
                123 University Avenue<br />
                Suite 456<br />
                Education City, ED 12345
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm md:text-base">
            <p>&copy; {new Date().getFullYear()} Spacefix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;