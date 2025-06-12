import React from 'react';

const StageLayout = ({ stage, totalStages, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="bg-indigo-600 text-white py-4 px-6 text-center text-xl font-semibold">
          Career Recommendation System – Stage {stage} of {totalStages}
        </header>

        <div className="p-6">{children}</div>

        <footer className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} Career Pathway Nigeria
        </footer>
      </div>
    </div>
  );
};

export default StageLayout;
