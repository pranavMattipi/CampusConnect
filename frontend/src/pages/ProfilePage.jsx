// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        setError("");

        // 🔹 Replace this with actual logged-in student's studentId or hardcode for now
        const loggedInStudentId = "S1756400179340";

        const response = await axios.get("http://localhost:8000/api/students");
        const allStudents = response.data;

        // Find the student by studentId
        const studentData = allStudents.find(
          (s) => s.studentId === loggedInStudentId
        );

        if (!studentData) {
          setError("Student not found");
        } else {
          // Convert year number to display string
          studentData.year = `${studentData.year} ${
            studentData.year === 1 ? "st" : studentData.year === 2 ? "nd" : studentData.year === 3 ? "rd" : "th"
          } Year`;

          setStudent(studentData);
        }
      } catch (err) {
        console.error("Error fetching student:", err.response || err.message);
        setError("Failed to load profile. Check console.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!student) return null;

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Gradient Header with Avatar */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-40 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
            <img
              src={
                student.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  student.name
                )}&background=6d28d9&color=fff&size=128`
              }
              alt={student.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-8 text-center">
          <h1
            className="text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {student.name}
          </h1>
          <p className="text-gray-500 text-lg mb-6">{student.branch}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <ProfileField label="Roll Number" value={student.rollNumber} />
            <ProfileField label="Student ID" value={student.studentId} />
            <ProfileField label="Year" value={student.year} />
            <ProfileField label="Email" value={student.email} />
            <ProfileField
              label="College"
              value={student.college?.name || "Unknown"}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-center space-x-4">
            <button className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
              Edit Profile
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
    <span className="text-sm font-medium text-gray-500">{label}</span>
    <span className="text-lg font-semibold text-gray-900">{value}</span>
  </div>
);

export default ProfilePage;
