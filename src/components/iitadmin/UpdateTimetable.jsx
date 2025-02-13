import React, { useState } from 'react';

const EditableTimeTable = () => {
  const timeSlots = [
    "08:30-10:30",
    "10:30-12:30",
    "13:30-15:30",
    "15:30-17:30"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const groups = Array.from({ length: 10 }, (_, i) => `L5_CS_G${i + 1}`);

  const subjects = [
    { code: "5SENG003C", name: "Algorithms Theory Design and practice" },
    { code: "5COSC021C", name: "Software Development Group Project" },
    { code: "5COSC999C", name: "Professional Development" },
    { code: "5COSC023C", name: "Mobile Application Development" },
    { code: "5COSC024C", name: "Server-side Web Development" },
    { code: "5DATA001C", name: "Data mining and Machine learning" },
    { code: "5CCGD013C", name: "XR Multimodal Interaction" },
    { code: "5CCGD010C", name: "Maths and Physics for Games [CS]" },
    { code: "5COSC022C", name: "Client-Server Architectures [CS]" }
  ];

  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [timetableData, setTimetableData] = useState({});

  const handleInputChange = (day, timeSlot, field, value) => {
    setTimetableData(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [timeSlot]: {
          ...(prev[day]?.[timeSlot] || {}),
          [field]: value
        }
      }
    }));
  };

  const CellInputs = ({ day, timeSlot }) => {
    const data = timetableData[day]?.[timeSlot] || {};
    
    return (
      <div className="p-2 space-y-2">
        {/* Subject Dropdown */}
        <select
          value={data.courseCode || ''}
          onChange={(e) => handleInputChange(day, timeSlot, 'courseCode', e.target.value)}
          className="w-full p-1 text-sm border rounded bg-white"
        >
          <option value="">Select Subject</option>
          {subjects.map(subject => (
            <option key={subject.code} value={subject.code}>
              {subject.code} - {subject.name}
            </option>
          ))}
        </select>

        {/* Class Type */}
        <select
          value={data.type || ''}
          onChange={(e) => handleInputChange(day, timeSlot, 'type', e.target.value)}
          className="w-full p-1 text-sm border rounded bg-white"
        >
          <option value="">Select Type</option>
          <option value="LEC">LEC</option>
          <option value="TUT">TUT</option>
          <option value="LAB">LAB</option>
        </select>

        {/* Location and Room */}
        <div className="flex gap-2">
          <select
            value={data.locationType || ''}
            onChange={(e) => handleInputChange(day, timeSlot, 'locationType', e.target.value)}
            className="w-1/2 p-1 text-sm border rounded bg-white"
          >
            <option value="">Location</option>
            <option value="PHYSICAL">Physical</option>
            <option value="ONLINE">Online</option>
          </select>
          {data.locationType === 'PHYSICAL' && (
            <select
              value={data.room || ''}
              onChange={(e) => handleInputChange(day, timeSlot, 'room', e.target.value)}
              className="w-1/2 p-1 text-sm border rounded bg-white"
            >
              <option value="">Room</option>
              <option value="SP-3LA">SP-3LA</option>
              <option value="SP-3LB">SP-3LB</option>
              <option value="SP-4LA">SP-4LA</option>
              <option value="SP-4LB">SP-4LB</option>
            </select>
          )}
        </div>

        {/* Lecturers Text Input */}
        <input
          type="text"
          placeholder="Enter lecturers (comma-separated)"
          value={data.lecturers || ''}
          onChange={(e) => handleInputChange(day, timeSlot, 'lecturers', e.target.value)}
          className="w-full p-1 text-sm border rounded"
        />
      </div>
    );
  };

  const handleSave = () => {
    console.log('Group:', selectedGroup);
    console.log('Timetable Data:', timetableData);
    // Here you would save to your database
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold">Edit Timetable</h2>
        
        {/* Group Selection */}
        <div className="flex items-center space-x-4">
          <label className="font-medium">Select Group:</label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="p-2 border rounded bg-white"
          >
            {groups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100 w-20">Time</th>
              {days.map(day => (
                <th key={day} className="border p-2 bg-gray-100 w-1/6">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(timeSlot => (
              <tr key={timeSlot}>
                <td className="border p-2 font-medium text-sm bg-gray-50">
                  {timeSlot}
                </td>
                {days.map(day => (
                  <td key={`${day}-${timeSlot}`} className="border">
                    <CellInputs day={day} timeSlot={timeSlot} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-medium"
        >
          Save Timetable
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium mb-2">Instructions:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Select a group from the dropdown above</li>
          <li>Choose subject and class type for each time slot</li>
          <li>Enter lecturer codes separated by commas (e.g., BNU, AHTU)</li>
          <li>Click Save Timetable when finished</li>
        </ul>
      </div>
    </div>
  );
};

export default EditableTimeTable;