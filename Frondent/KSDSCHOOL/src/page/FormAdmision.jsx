// eslint-disable-next-line no-unused-vars
import React from 'react';
import leadr from '../assets/images/register1.jpg'

const FormAdmission = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4 bg-gray-50">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full">
          <img 
            src={leadr}
            alt="Student" 
            className="object-cover h-full w-full"
          />
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-teal-600 text-white relative">
          <h2 className="text-2xl font-semibold mb-6">Admissions open for 2023–2024</h2>

          <form className="space-y-4">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm mb-1">Student Name</label>
              <input 
                type="text" 
                id="studentName" 
                placeholder="Enter Student name" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              />
            </div>

            {/* Parent Name */}
            <div>
              <label htmlFor="parentName" className="block text-sm mb-1">Parent Name</label>
              <input 
                type="text" 
                id="parentName" 
                placeholder="Enter Parent name" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm mb-1">Student DOB</label>
              <input 
                type="date" 
                id="dob" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm mb-1">Student Gender</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="male" className="mr-2" />
                  Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="female" className="mr-2" />
                  Female
                </label>
              </div>
            </div>

            {/* Class */}
            <div>
              <label htmlFor="class" className="block text-sm mb-1">Class</label>
              <select 
                id="class" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              >
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter mail address" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">Phone No</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Enter phone number" 
                className="w-full px-4 py-2 rounded border border-gray-300 text-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button type="submit" className="w-full py-2 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                SEND
              </button>
              <button type="reset" className="w-full py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-400 transition">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormAdmission;
