

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const studentsData = [
  {
      id: 1,
      name: "John Doe",
      age: 12,
      rollNumber: "S1234",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      teacher: "Mr. Anderson",
      parent_name: "Sarah Doe",
      parent_email: "sarah.doe@example.com",
      contact_number: "+1234567890",
      address: "123 Maple Street, Springfield",
      dob: "2013-05-12",
      blood_group: "O+",
      gender: "Male",
      disability_type: "Dyslexia",
      disability_description: "Difficulty in reading and writing.",
      progress: "Good improvement in reading."
  },
  {
      id: 2,
      name: "Jane Smith",
      age: 11,
      rollNumber: "S5678",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      teacher: "Mr. Anderson",
      parent_name: "Emily Smith",
      parent_email: "emily.smith@example.com",
      contact_number: "+9876543210",
      address: "456 Oak Avenue, Lincoln",
      dob: "2014-09-22",
      blood_group: "A+",
      gender: "Female",
      disability_type: "Hearing Impairment",
      disability_description: "Requires sign language for communication.",
      progress: "Excelling in sign language."
  },
  {
      id: 3,
      name: "Sam Wilson",
      age: 10,
      rollNumber: "S9101",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      teacher: "Mr. Anderson",
      parent_name: "Robert Wilson",
      parent_email: "robert.wilson@example.com",
      contact_number: "+1357924680",
      address: "789 Pine Road, Madison",
      dob: "2015-02-18",
      blood_group: "B-",
      gender: "Male",
      disability_type: "Autism",
      disability_description: "Challenges with social interaction and communication.",
      progress: "Great improvement in communication."
  },
  {
      id: 4,
      name: "Emily Davis",
      age: 13,
      rollNumber: "S1122",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      teacher: "Mr. Anderson",
      parent_name: "Anna Davis",
      parent_email: "anna.davis@example.com",
      contact_number: "+2468013579",
      address: "234 Birch Lane, Denver",
      dob: "2012-07-30",
      blood_group: "AB+",
      gender: "Female",
      disability_type: "Visual Impairment",
      disability_description: "Relies on braille and assistive technology.",
      progress: "Excellent progress with braille."
  },
  {
      id: 5,
      name: "Michael Brown",
      age: 14,
      rollNumber: "S3344",
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      teacher: "Mr. Anderson",
      parent_name: "William Brown",
      parent_email: "william.brown@example.com",
      contact_number: "+1122334455",
      address: "567 Cedar Street, Austin",
      dob: "2011-12-05",
      blood_group: "O-",
      gender: "Male",
      disability_type: "ADHD",
      disability_description: "Struggles with focus and attention.",
      progress: "Improving focus and attention."
  }
];


export default function TeacherDashboard() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState(studentsData);
  const navigate = useNavigate();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold text-center text-black">My Students</h1>
      <p className="text-center text-gray-400 mb-4">Total Students: {students.length}</p>

      {/* Search Bar */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or roll number..."
          className="p-2 w-80 border rounded-lg shadow-sm focus:ring focus:ring-[#4A90E2] bg-[#2E2E3E] text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student.id} className="bg-[#2E2E3E] shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-xl">
              <img src={student.photo} alt={student.name} className="w-24 h-24 mx-auto rounded-full border-2 border-[#4A90E2]" />
              <h2 className="text-xl font-semibold text-white mt-2">{student.name}</h2>
              <p className="text-gray-400">Age: {student.age}</p>
              <p className="text-gray-500">Roll No: {student.rollNumber}</p>
              <p className="text-gray-500">Special Needs: {student.specialNeeds}</p>
              <button
                className="mt-3 px-4 py-2 bg-[#9B51E0] text-white rounded-lg hover:bg-[#4A90E2] transition transform hover:scale-105 hover:shadow-md"
                onClick={() => navigate(`/student/${student.id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No students found.</p>
        )}
      </div>
    </div>
  );
}


