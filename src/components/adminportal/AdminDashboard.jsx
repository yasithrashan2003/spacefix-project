import React from 'react';
import { Building2, ChevronRight, Search, Layout, Settings, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const universities = [
    { id: 1, name: 'Informatics Institute of Technology', code: 'IIT', students: '2,500+', courses: '45+' },
    { id: 2, name: 'Central University', code: 'CU', students: '5,000+', courses: '60+' },
    { id: 3, name: 'Metropolitan Institute', code: 'MI', students: '3,200+', courses: '38+' },
    { id: 4, name: 'Technical College', code: 'TC', students: '1,800+', courses: '25+' },
    { id: 5, name: 'Global University', code: 'GU', students: '4,100+', courses: '52+' }
  ];

  const handleUniversitySelect = (code) => {
    if (code === 'IIT') {
      navigate('');
    } else {
      alert('This university portal is under development');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">UniAdmin</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-sm font-medium text-emerald-600">A</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="py-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                University Management Portal
              </h1>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                Select a university to access its management dashboard
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-6 max-w-md mx-auto sm:mx-0">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search universities..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Universities Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <button
                key={university.id}
                onClick={() => handleUniversitySelect(university.code)}
                className="bg-white border border-gray-200 rounded-2xl p-6 transition duration-200 hover:shadow-lg hover:border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition">
                      <Building2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition transform group-hover:translate-x-1" />
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {university.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 text-left">Code: {university.code}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Students</p>
                      <p className="text-base font-medium text-gray-900">{university.students}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Courses</p>
                      <p className="text-base font-medium text-gray-900">{university.courses}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 UniAdmin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;