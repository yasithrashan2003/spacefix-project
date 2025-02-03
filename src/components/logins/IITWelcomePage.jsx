import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const IITWelcomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <span className="text-xl font-semibold text-slate-800">SPACEFIX</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/student-login" className="text-slate-600 hover:text-slate-800 transition-colors px-4 py-2 rounded-full hover:bg-slate-50">
                Student Login
              </Link>
              <Link to="/lecture-login" className="text-slate-600 hover:text-slate-800 transition-colors px-4 py-2 rounded-full hover:bg-slate-50">
                Lecturer Login
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-slate-600 hover:text-slate-800 transition-colors px-4 py-2 rounded-full hover:bg-slate-50"
                >
                  <span>Service Login</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1">
                    <Link to="/admin-login" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                      Administrative Staff
                    </Link>
                    <Link to="/lab-login" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                      Lab Keeper
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/student-login" className="block px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md">
                Student Login
              </Link>
              <Link to="/lecture-login" className="block px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md">
                Lecturer Login
              </Link>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md"
              >
                Service Login
              </button>
              {isDropdownOpen && (
                <div className="pl-6 space-y-1">
                  <Link to="/admin-login" className="block px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md">
                    Administrative Staff
                  </Link>
                  <Link to="/lab-login" className="block px-3 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md">
                    Lab Keeper
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <main className="pt-16 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
            <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
              <span className="text-sm font-medium bg-emerald-400/20 text-emerald-600 px-3 py-1 rounded-full">
                IIT Sri Lanka
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Welcome to IIT <span className="text-emerald-400">Spacefix</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl">
                Experience seamless space management at Informatics Institute of Technology. 
                Book labs, classrooms, and meeting spaces with real-time availability.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Modern workspace"
                    className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{ minHeight: '400px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IITWelcomePage;