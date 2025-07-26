// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      {/* Shield Glow Behind Card */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-radial from-indigo-800/40 via-purple-600/20 to-transparent rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto my-8 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-300 mb-16 animate-fadeIn">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto animate-slideInUp">
          Have questions about TapShield, or want to collaborate? Feel free to
          reach out to us.
        </p>
        <div className="bg-[#0f172a] p-10 rounded-xl shadow-xl border border-indigo-700 max-w-lg mx-auto animate-slideInUp animation-delay-300">
          <h3 className="text-3xl font-bold text-indigo-400 mb-6">
            Contact Information
          </h3>
          <div className="space-y-4 text-lg text-gray-300">
            <p className="flex items-center justify-center">
              <span className="text-indigo-500 mr-3 text-2xl">📧</span>
              Email:
              <a
                href="mailto:runtimeterror1.team@gmail.com"
                className="ml-2 text-blue-400 hover:underline"
              >
                runtimeterror1.team@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center">
              <span className="text-indigo-500 mr-3 text-2xl">📧</span>
              Youtube:
              <a
                href="https://www.youtube.com/@runtimeterror12"
                className="ml-2 text-blue-400 hover:underline"
              >
                Runtime Terror
              </a>
            </p>
            <p className="flex items-center justify-center">
              <span className="text-indigo-500 mr-3 text-2xl">📍</span>
              Team: <span className="ml-2">Runtime Terror</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
