import React, { useState } from 'react';

const futureScopeItems = [
  {
    title: '📍 GPS Integration',
    description: 'Send real-time location to trusted contacts for faster emergency response.',
    image: 'https://res.cloudinary.com/dfolw8zvb/image/upload/v1753510962/future-gps_rvxqla.png',
  },
  {
    title: '🔋 Battery Optimization',
    description: 'Enhancing power efficiency for over 5 days standby with smart sleep cycles.',
    image: 'https://res.cloudinary.com/dfolw8zvb/image/upload/v1753510965/future-battery_jyjeel.png',
  },
  {
    title: '📱 Companion App',
    description: 'Manage contacts, tap patterns, and view device stats through an easy-to-use app.',
    image: 'https://res.cloudinary.com/dfolw8zvb/image/upload/v1753510964/future-companion_qu6msq.png',
  },
  {
    title: '🎙️ Voice Activation',
    description: 'Optional voice-triggered SOS for additional accessibility and safety.',
    image: 'https://res.cloudinary.com/dfolw8zvb/image/upload/v1753510965/future-voice_hodcyx.png',
  },
  {
    title: '🌐 Community SOS Network',
    description: 'Connect nearby volunteers via mesh alerts to respond faster in emergencies.',
    image: 'https://res.cloudinary.com/dfolw8zvb/image/upload/v1753510964/future-community_sfontr.png',
  },
];

const tabs = ['Presentation', 'Live Demo', 'Future Scope'];

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState('Presentation');

  return (
    <section
      id="live-demo"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-radial from-indigo-800/30 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto my-8 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-300 mb-12 animate-fadeIn">
          TapShield Showcase
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border-2 ${
                activeTab === tab
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : 'border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-slideInUp transition-all duration-500">
          {activeTab === 'Live Demo' && (
            <>
              <h3 className="text-3xl font-bold text-indigo-400 mb-6">📽️ Live Device Demo</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Tap → AI Detection → GSM Trigger → Live Location SMS — all in under 2 seconds.
              </p>
              <div className="w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden border-2 border-indigo-600 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ucn77c47pr0?si=OAh9lWhtnC3ffc3q"
                  title="Live Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}

          {activeTab === 'Presentation' && (
            <>
              <h3 className="text-3xl font-bold text-indigo-400 mb-6">🗣️ Team Presentation</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Watch our team pitch the TapShield journey, tech stack, and mission.
              </p>
              <div className="w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden border-2 border-indigo-600 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/aPw6EyoiOC8?si=UgyEwkyHXLSqs43x"
                  title="Team Presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}

          {activeTab === 'Future Scope' && (
            <>
              <h3 className="text-3xl font-bold text-indigo-400 mb-6">🔮 Future Scope</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                TapShield is evolving into a full-fledged ecosystem to empower silent emergency response.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {futureScopeItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#0f172a] p-6 rounded-xl border border-indigo-700 shadow-md hover:shadow-indigo-500/30 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-contain mb-4 rounded"
                    />
                    <h4 className="text-indigo-400 text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-indigo-200 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-indigo-300 text-xl italic mt-12">
                "Safety shouldn't wait for the internet. TapShield makes sure it doesn’t."
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
