import React, { useState, useEffect } from 'react';
import { PlusCircle, Search, Pencil, Trash2, X } from 'lucide-react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, doc, deleteDoc, setDoc } from 'firebase/firestore';

function IITAdminDashboard() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [lecturers, setLecturers] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const lecturersCollection = collection(db, 'lecturers');
        const lecturersSnapshot = await getDocs(lecturersCollection);
        const lecturersList = lecturersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLecturers(lecturersList);
      } catch (error) {
        console.error('Error fetching lecturers:', error);
        alert('Error loading lecturers. Please try again.');
      }
    };
    
    fetchLecturers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const lecturerData = { name, email };
      if (editing) {
        await setDoc(doc(db, 'lecturers', editing), lecturerData);
      } else {
        await setDoc(doc(db, 'lecturers', email), lecturerData);
      }
      
      // Refresh the lecturers list
      const lecturersCollection = collection(db, 'lecturers');
      const lecturersSnapshot = await getDocs(lecturersCollection);
      const lecturersList = lecturersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLecturers(lecturersList);
      
      alert(editing ? 'Lecturer updated successfully!' : 'Lecturer added successfully!');
      setEmail('');
      setName('');
      setEditing(null);
    } catch (error) {
      console.error('Error saving lecturer:', error);
      alert('Error saving data. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lecturer?')) {
      try {
        await deleteDoc(doc(db, 'lecturers', id));
        setLecturers(lecturers.filter(lecturer => lecturer.id !== id));
        alert('Lecturer deleted successfully!');
      } catch (error) {
        console.error('Error deleting lecturer:', error);
        alert('Error deleting lecturer. Please try again.');
      }
    }
  };

  const handleEdit = (lecturer) => {
    setEmail(lecturer.email);
    setName(lecturer.name);
    setEditing(lecturer.id);
  };

  const handleCancelEdit = () => {
    setEmail('');
    setName('');
    setEditing(null);
  };

  const filteredLecturers = lecturers.filter(lecturer =>
    lecturer.name.toLowerCase().includes(search.toLowerCase()) ||
    lecturer.email.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header - Responsive Text Sizes */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">IIT Admin Dashboard</h1>
          <p className="mt-2 text-xs md:text-sm text-gray-600">Manage your lecturers and their information</p>
        </div>

        {/* Add/Edit Lecturer Form - Responsive Layout */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-base md:text-lg font-medium text-gray-900 flex items-center gap-2">
              <PlusCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
              {editing ? 'Edit Lecturer' : 'Add New Lecturer'}
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 md:mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={editing !== null}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-sm disabled:bg-gray-100 py-2 px-3 md:px-4 h-8 md:h-10"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-sm py-2 px-3 md:px-4 h-8 md:h-10"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 md:gap-3">
                {editing && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 border border-gray-300 shadow-sm text-xs md:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <X className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {editing ? 'Update Lecturer' : 'Add Lecturer'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Search and Table - Responsive Design */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-base md:text-lg font-medium text-gray-900 flex items-center gap-2">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
                Lecturers List
              </h2>
              <div className="relative w-full md:w-64 lg:w-96">
                <input
                  type="text"
                  placeholder="Search lecturers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs md:text-sm pl-8 md:pl-10 py-1.5 md:py-2 px-3 md:px-4 h-8"
                />
                <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute left-2 md:left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-3 md:px-6 py-2 md:py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLecturers.length > 0 ? (
                      filteredLecturers.map((lecturer) => (
                        <tr key={lecturer.id} className="hover:bg-gray-50">
                          <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                            {lecturer.name}
                          </td>
                          <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                            {lecturer.email}
                          </td>
                          <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-right text-xs md:text-sm font-medium">
                            <button
                              onClick={() => handleEdit(lecturer)}
                              className="text-indigo-600 hover:text-indigo-900 inline-flex items-center gap-1 mr-2 md:mr-4"
                            >
                              <Pencil className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(lecturer.id)}
                              className="text-red-600 hover:text-red-900 inline-flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-3 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm text-gray-500 italic">
                          No lecturers found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IITAdminDashboard;