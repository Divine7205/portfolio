import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Adegoke Divine</h1>
        <h2 className="text-xl text-gray-600 mb-6">Software Engineer</h2>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Profile</h3>
          <p className="text-gray-700">
            Software Engineer with a passion for crafting innovative solutions using Java, React, and Python. Excels in
            software development and problem-solving, leveraging strong team collaboration skills to drive projects forward.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h3>
          <ul className="list-disc pl-6 text-blue-600">
            <li>
              <a href="#" className="hover:underline">
                Event Planner website (Python Flask)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Car Booking website
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <span>Communication</span>
            <span>Problem Solving</span>
            <span>Teamwork</span>
            <span>Time Management</span>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Education</h3>
          <div className="mb-4">
            <p className="font-bold">Middlesex University, London</p>
            <p>B.Sc. Information Technology and Business Information Systems</p>
            <p className="text-sm text-gray-500">09/2024 – 06/2025</p>
          </div>
          <div>
            <p className="font-bold">Aptech Computer Training, Lagos</p>
            <p>Advanced Diploma in Software Engineering (ADSE)</p>
            <p className="text-sm text-gray-500">11/2021 – 11/2023</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hobbies</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Reading</li>
            <li>Solving puzzles</li>
            <li>Listening to music</li>
            <li>Watching movies</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h3>
          <div className="flex items-center text-gray-700 mb-2">
            <FaPhone className="mr-2" /> +44 788-117-3701
          </div>
          <div className="flex items-center text-gray-700 mb-2">
            <FaEnvelope className="mr-2" /> adegokedivine1@gmail.com
          </div>
          <div className="flex items-center text-gray-700">
            <FaLinkedin className="mr-2" /> <a href="https://linkedin.com/in/divineadegoke" className="text-blue-600 hover:underline">linkedin.com/in/divineadegoke</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
