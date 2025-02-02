import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { FaEdit, FaTrash, FaSearch, FaUserPlus, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const IITAdminDashboard = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [lecturers, setLecturers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showTable, setShowTable] = useState(false); // State to toggle table visibility

  useEffect(() => {
    const fetchLecturers = async () => {
      const lecturersCollection = collection(db, 'lecturers');
      const lecturersSnapshot = await getDocs(lecturersCollection);
      const lecturersList = lecturersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLecturers(lecturersList);
    };
    fetchLecturers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'lecturers', email), { name, email });
      alert(editing ? 'Lecturer updated successfully!' : 'Lecturer added successfully!');
      setEmail('');
      setName('');
      setEditing(null);
      window.location.reload();
    } catch (error) {
      alert('Error saving data: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lecturer?')) {
      try {
        await deleteDoc(doc(db, 'lecturers', id));
        setLecturers(lecturers.filter(lecturer => lecturer.id !== id));
        alert('Lecturer deleted successfully!');
      } catch (error) {
        alert('Error deleting lecturer: ' + error.message);
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
    <div className="admin-dashboard bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Admin Panel
          </h1>
          <p className="mt-2 text-gray-600">Manage lecturers efficiently</p>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaUserPlus className="mr-2 text-indigo-600" /> Add Lecturer
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lecturer Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Lecturer Email"
                required
                className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                disabled={editing !== null}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lecturer Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Lecturer Name"
                required
                className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center text-sm"
            >
              {editing ? (
                <>
                  <FaEdit className="mr-2" /> Update Lecturer
                </>
              ) : (
                <>
                  <FaUserPlus className="mr-2" /> Add Lecturer
                </>
              )}
            </button>
            {editing && (
              <button
                type="button"
                className="mt-3 w-full py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200 text-sm"
                onClick={handleCancelEdit}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* Search Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaSearch className="mr-2 text-indigo-600" /> Search Lecturers
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Lecturer by Name or Email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Toggle Table Visibility Button */}
        <div className="text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 flex items-center justify-center mx-auto"
          >
            {showTable ? (
              <>
                <FaEyeSlash className="mr-2" /> Hide Lecturers
              </>
            ) : (
              <>
                <FaEye className="mr-2" /> Show Lecturers
              </>
            )}
          </button>
        </div>

        {/* Lecturers Table */}
        {showTable && (
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full table-auto bg-white rounded-lg shadow-md border border-gray-200">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="px-6 py-3 text-left text-lg font-semibold text-indigo-700">Name</th>
                  <th className="px-6 py-3 text-left text-lg font-semibold text-indigo-700">Email</th>
                  <th className="px-6 py-3 text-center text-lg font-semibold text-indigo-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLecturers.length > 0 ? (
                  filteredLecturers.map((lecturer) => (
                    <tr key={lecturer.id} className="hover:bg-indigo-50 transition duration-150 border-b border-gray-200">
                      <td className="px-6 py-4 text-lg text-gray-700">{lecturer.name}</td>
                      <td className="px-6 py-4 text-lg text-gray-700">{lecturer.email}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-row items-center space-x-4">
                          <button
                            className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-200 flex items-center justify-center text-sm"
                            onClick={() => handleEdit(lecturer)}
                          >
                            <FaEdit className="mr-2" /> Edit
                          </button>
                          <button
                            className="px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200 flex items-center justify-center text-sm"
                            onClick={() => handleDelete(lecturer.id)}
                          >
                            <FaTrash className="mr-2" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-4 text-center text-gray-500">
                      No lecturers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default IITAdminDashboard;
