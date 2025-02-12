import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                SPACEFIX
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Features', 'Solutions', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-base font-medium transition-all duration-300 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/uni-login')}
                  className="px-6 py-2.5 text-emerald-600 bg-white/90 rounded-full hover:bg-white transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/admin-login')}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition-all duration-300 font-medium shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed position */}
        <div 
          className={`lg:hidden fixed left-0 right-0 top-16 transition-all duration-300 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'
          }`}
        >
          <div className="mx-4 bg-white shadow-xl rounded-xl border border-gray-100">
            <div className="flex flex-col divide-y divide-gray-100">
              {['Features', 'Solutions', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="w-full text-left px-6 py-4 text-gray-700 hover:text-emerald-600 font-medium hover:bg-emerald-50/50 transition-all duration-200 flex items-center justify-between group"
                >
                  <span>{item}</span>
                  <ChevronRight className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                </button>
              ))}
              <div className="p-4 space-y-3">
                <button
                  onClick={() => navigate('/uni-login')}
                  className="w-full px-6 py-3 text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-all duration-200 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/admin-login')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
{/* Hero Section */}
<div className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-emerald-800 min-h-screen flex items-center overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center opacity-30" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1948&auto=format&fit=crop')",
      }}>
  </div>
  
  {/* Decorative Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
  </div>
  
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 mx-auto max-w-7xl">
    <div className="animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
        Transform Your Campus
        <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed">
        Revolutionize your university's space management with our intelligent platform.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition-all duration-300 font-medium text-lg relative overflow-hidden">
          <span className="relative z-10">Start Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
        <button className="group px-8 py-4 border-2 border-emerald-400 text-emerald-200 rounded-full hover:bg-emerald-800/50 transition-all duration-300 font-medium text-lg flex items-center gap-2">
          Watch Demo
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Powerful Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your university spaces efficiently
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Smart Tracking",
                description: "Real-time monitoring of space utilization and occupancy rates"
              },
              {
                icon: "🗺️",
                title: "Interactive Maps",
                description: "Dynamic campus navigation with real-time updates"
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Comprehensive insights into space usage patterns"
              },
              {
                icon: "🔐",
                title: "Secure Access",
                description: "Role-based access control and authentication"
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Fully responsive design for all devices"
              },
              {
                icon: "🤝",
                title: "Integration Ready",
                description: "Seamless integration with existing systems"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-16">
              Solutions That Drive Results
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Space Optimization",
                  description: "Maximize campus space utilization with intelligent scheduling"
                },
                {
                  title: "Resource Management",
                  description: "Efficiently manage all campus resources in one platform"
                },
                {
                  title: "User Experience",
                  description: "Provide a seamless experience for students and staff"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Universities" },
              { number: "100K+", label: "Active Users" },
              { number: "1M+", label: "Bookings Made" },
              { number: "99%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600">
                Discover how we can transform your campus experience
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  info: "support@spacefix.com"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  info: "+1 (555) 123-4567"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  info: "123 University Ave"
                }
              ].map((contact, index) => (
                <div key={index} className="group bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.info}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-emerald-500 to-cyan-600 p-8 rounded-2xl text-white text-center">
              <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
              <div className="flex justify-center space-x-8">
                {[
                  { icon: <Facebook className="w-6 h-6" />, name: 'Facebook' },
                  { icon: <Twitter className="w-6 h-6" />, name: 'Twitter' },
                  { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="hover:text-emerald-200 transition-colors transform hover:scale-110 transition-transform"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SPACEFIX
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Making university space management smarter and more efficient.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {['Features', 'Solutions', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="text-gray-400">
                123 University Avenue<br />
                Suite 456<br />
                Education City, ED 12345
              </p>
            </div>
          </div>

          <div className="py-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Spacefix. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  Support
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;