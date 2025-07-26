// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white py-10 mt-16 rounded-t-3xl shadow-inner border-t border-indigo-800 overflow-hidden">
      {/* Shield-style glow behind footer */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[400px] h-[400px] bg-radial from-indigo-800/30 via-purple-700/10 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto text-center px-6">
        <p className="text-2xl font-bold text-indigo-400 mb-3">TapShield</p>
        <p className="text-indigo-200 italic mb-2">
          "Silent safety. Smart protection. One tap at a time."
        </p>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-indigo-300">Runtime Terror</span>. All rights reserved.
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
