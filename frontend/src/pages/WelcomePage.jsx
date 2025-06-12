import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import heroImage from '../assets/hero-student.svg';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Welcome to Career Pathway</h2>
          <p className="mb-4 text-gray-700">
            Choosing the right course can feel overwhelming. This system is designed to guide you step-by-step toward discovering fields and programs that fit your interests, subjects, and strengths.
          </p>
          <p className="mb-6 text-gray-600">
            In just three simple stages, you'll get meaningful recommendations to help you plan ahead confidently.
          </p>
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            onClick={() => navigate('/stage-1')}
          >
            Start Your Journey
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Student Illustration" className="w-full h-auto" />
        </div>
      </div>
    </MainLayout>
  );
};

export default WelcomePage;