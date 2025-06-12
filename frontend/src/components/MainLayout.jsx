import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="bg-indigo-600 text-white px-6 py-4 shadow">
        <h1 className="text-xl font-bold">🎓 Career Pathway Nigeria</h1>
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="bg-gray-200 text-center py-3 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Career Pathway Nigeria. 
        All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;