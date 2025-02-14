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
      const offset = 80;
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
      {/* Navigation - Removed blur effect */}
<nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
  isScrolled ? 'bg-white shadow-lg' : 'bg-white'
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
            className="text-gray-700 text-base font-medium transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/uni-login')}
            className="px-6 py-2.5 text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-all duration-300 font-medium"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/')}
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

  {/* Mobile Menu */}
  <div 
    className={`lg:hidden fixed left-0 right-0 top-16 sm:top-20 transition-all duration-300 transform ${
      isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'
    } z-50`}
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
            onClick={() => navigate('/')}
            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>

{/* Hero Section with proper spacing for fixed navbar */}
<div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 pt-16 sm:pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Existing gradient blobs */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-100/40 to-cyan-100/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-emerald-100/40 to-cyan-100/40 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4 animate-pulse"></div>

          {/* Floating circles with improved animations */}
          <div className="absolute left-1/4 top-32 w-12 h-12 bg-emerald-100/80 rounded-full animate-[bounce_6s_ease-in-out_infinite]"></div>
          <div className="absolute right-1/4 top-48 w-8 h-8 bg-cyan-100/80 rounded-full animate-[ping_4s_ease-in-out_infinite]"></div>
          <div className="absolute left-1/3 bottom-32 w-16 h-16 bg-emerald-100/80 rounded-full animate-[bounce_8s_ease-in-out_infinite]"></div>

          {/* New animated squares */}
          <div className="absolute left-1/2 top-1/4 w-12 h-12 bg-emerald-100/80 animate-[spin_8s_linear_infinite]"></div>
          <div className="absolute right-1/3 bottom-1/4 w-16 h-16 bg-cyan-100/80 animate-[spin_10s_linear_infinite]"></div>

          {/* Abstract shapes with animations */}
          <div className="absolute right-1/3 top-1/4 w-24 h-24 border-4 border-emerald-100/80 rounded-full transform rotate-45 animate-[spin_15s_linear_infinite]"></div>
          <div className="absolute left-1/2 bottom-1/4 w-32 h-32 border-4 border-cyan-100/80 rounded-full transform -rotate-12 animate-[spin_20s_linear_infinite]"></div>

          {/* New triangular shapes */}
          <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[25px] border-l-transparent border-b-[40px] border-b-emerald-100/80 border-r-[25px] border-r-transparent animate-[bounce_7s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-cyan-100/80 border-r-[20px] border-r-transparent animate-[bounce_9s_ease-in-out_infinite]"></div>

          {/* Animated dotted patterns */}
          <div className="absolute top-1/4 right-1/4 flex gap-4 animate-[pulse_4s_ease-in-out_infinite]">
            <div className="w-2 h-2 bg-emerald-200/90 rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-200/90 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-emerald-200/90 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 flex gap-4 animate-[pulse_5s_ease-in-out_infinite]">
            <div className="w-2 h-2 bg-cyan-200/90 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-200/90 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-cyan-200/90 rounded-full"></div>
          </div>

          {/* Large animated decorative rings */}
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-emerald-100/80 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-cyan-100/80 rounded-full animate-[spin_25s_linear_infinite]"></div>

          {/* New diamond shapes */}
          <div className="absolute top-1/2 right-1/2 w-12 h-12 bg-emerald-100/80 rotate-45 animate-[bounce_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/2 left-1/3 w-8 h-8 bg-cyan-100/80 rotate-45 animate-[bounce_7s_ease-in-out_infinite]"></div>

          {/* Grid pattern with animation */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(236,253,245,0.9)_1px,_transparent_1px)] [background-size:20px_20px] animate-[pulse_8s_ease-in-out_infinite]"></div>

          {/* New wave patterns */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-cyan-100/20 to-emerald-100/20 animate-[pulse_7s_ease-in-out_infinite]"></div>
        </div>

        {/* Main Content Container */}
        {/* ... Rest of the content remains the same ... */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] py-8 md:py-10 lg:py-12">
            {/* Left Content Column */}
            <div className="flex-1 w-full lg:max-w-2xl pt-4 md:pt-6 lg:pt-8">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center lg:text-left">
                  Transform Your Campus
                  <span className="block mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    Experience
                  </span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Revolutionize your university's space management with our intelligent platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition-all duration-300 text-base md:text-lg font-medium w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Start Free Trial
                      <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  <button className="group px-6 md:px-8 py-3 md:py-4 border-2 border-emerald-500 text-emerald-600 rounded-full hover:bg-emerald-50 transition-all duration-300 text-base md:text-lg font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                    Watch Demo
                    <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>

                <div className="pt-8 md:pt-10 lg:pt-12">
                  <p className="text-gray-500 mb-4 text-center lg:text-left">Trusted by leading universities</p>
                  <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center lg:justify-start">
                    <img 
                      src="https://studyway-resources.s3.amazonaws.com/profilePictures/1677148866188.png"
                      alt="University 1" 
                      className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none mt-8 lg:mt-0">
              <div className="relative aspect-video bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-50/50 p-4 md:p-6">
                  <div className="h-full rounded-lg md:rounded-xl bg-white p-4 md:p-6 flex flex-col items-center justify-center">
                    <div className="animate-pulse flex flex-col items-center space-y-3 md:space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-gray-700 text-center">Space Management Made Simple</div>
                      <div className="flex gap-2 md:gap-3">
                        <div className="h-1.5 md:h-2 w-16 md:w-24 bg-emerald-200 rounded animate-pulse"></div>
                        <div className="h-1.5 md:h-2 w-12 md:w-16 bg-cyan-200 rounded animate-pulse"></div>
                        <div className="h-1.5 md:h-2 w-14 md:w-20 bg-emerald-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    className="hover:text-emerald-200 transition-all hover:scale-110"
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