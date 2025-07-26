// src/components/Home.jsx
import React from "react";
import shieldImg from "../assets/shield.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white py-24 md:py-32 lg:py-40 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[80%] h-[80%] bg-gradient-radial from-[#1f2937cc] to-transparent rounded-full blur-3xl opacity-70 shadow-[0_0_60px_#60a5fa44]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl -top-10 -left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl -bottom-20 -right-20 animate-pulse animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="container mx-auto my-8 px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slideInUp">
          TapShield:{" "}
          <span className="block text-indigo-300 mt-2">
            Tap. Trigger. Trust.
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 animate-slideInUp animation-delay-500">
          Your silent guardian for unseen emergencies. Discreet, Offline,
          Life-saving.
        </p>

        {/* 🔗 GitHub Link */}
        <div className="mb-12 animate-slideInUp animation-delay-600 text-center">
          <a
            href="https://github.com/Vikramsolanki12/TapShield"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 animate-pulse"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.933 0-1.31.47-2.38 1.235-3.22-.125-.304-.535-1.526.115-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.398 3-.403 1.02.005 2.045.137 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.872.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.625-5.48 5.922.43.372.81 1.102.81 2.222 0 1.605-.015 2.896-.015 3.286 0 .32.21.697.825.577C20.565 21.795 24 17.295 24 12c0-6.628-5.373-12-12-12z" />
            </svg>
            ⭐ View Source on GitHub
          </a>
        </div>

        {/* 🚀 Presentation Video */}
        <div className="mb-12 animate-slideInUp animation-delay-700">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
            Presentation Video
          </h2>
          <div className="aspect-video w-full max-w-4xl mx-auto border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aPw6EyoiOC8?si=t9u9JyM3Aj-utYix"
              title="Presentation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* 📱 Demo Video */}
        <div className="animate-slideInUp animation-delay-1000">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
            Live Demo Video
          </h2>
          <div className="aspect-video w-full max-w-4xl mx-auto border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://youtube.com/embed/ucn77c47pr0?si=Ai8Dl26WkAvwV21i"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
