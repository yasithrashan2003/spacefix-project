import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

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
            {/* Logo */}
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
              <button
                onClick={() => navigate('/user-login')}
                className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors"
              >
                University Portal
              </button>
              <button
                onClick={() => navigate('/admin-login')}
                className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors"
              >
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
              <button
                onClick={() => navigate('/user-login')}
                className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors"
              >
                University Portal
              </button>
              <button
                onClick={() => navigate('/admin-login')}
                className="px-6 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors"
              >
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
          backgroundImage: "url('https://images.unsplash.com/photo-1601933513793-1252ce25d644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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
                <a href="#" className="text-slate-600 hover:text-emerald-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-slate-600 hover:text-emerald-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-600 hover:text-emerald-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
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

export default HomePage;
