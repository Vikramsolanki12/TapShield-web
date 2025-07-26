import React, { useEffect, useState } from "react";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-[#0f172a] p-8 rounded-xl shadow-md border border-indigo-700 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp text-white">
    <div className="text-indigo-400 mb-4 text-5xl flex justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-indigo-200 mb-4 text-center">
      {title}
    </h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

const slides = [
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511598/img1_qxu3uz.png",
    caption: "👩‍🦰 She’s in danger. Her silence hides a cry for help.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511603/img2_mczxuc.png",
    caption: "📩 One tap. One second. A life saved.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511595/img3_c76dz5.png",
    caption:
      "👴 Alone. Lost. The elderly feel more than pain — they feel forgotten.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511604/img4_y5plsb.png",
    caption: "💬 A silent alert speaks louder than words.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511598/img5_reiaam.png",
    caption:
      "♿ Some can’t move. Some can’t speak. But they can still call for help.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511605/img6_fxm6s0.png",
    caption: "💡 Empowered with a tap. Help arrives before it’s too late.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511600/img7_kpouhb.png",
    caption: "🧒 A child feels fear — but can still reach someone who cares.",
  },
  {
    src: "https://res.cloudinary.com/dfolw8zvb/image/upload/v1753511601/img8_csttyq.png",
    caption: "🫂 One tap. One bond. One guardian by their side.",
  },
];

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const innovations = [
    {
      title: "On-device AI",
      description:
        "Edge AI with TinyML ensures tap detection works offline without latency.",
      icon: "🧠",
    },
    {
      title: "Tap-to-alert",
      description:
        "No voice, no button — just a secret tap pattern sends help instantly.",
      icon: "👆",
    },
    {
      title: "Stealthy Vibration Feedback",
      description:
        "Sends a subtle vibration confirmation to the user, keeping action discreet.",
      icon: "💢",
    },
    {
      title: "Instant GSM SMS",
      description:
        "GSM module sends location & help message without needing a smartphone.",
      icon: "📶",
    },
  ];

  const impacts = [
    {
      title: "Women in Danger",
      description:
        "Activates silently in stalking, abuse or assault scenarios.",
      icon: "♀️",
    },
    {
      title: "Elderly Aid",
      description:
        "Enables silent emergency signals for health episodes or falls.",
      icon: "👴",
    },
    {
      title: "Differently Abled Users",
      description:
        "Enables simple, touch-based alerts when speaking or moving is hard.",
      icon: "♿",
    },
    {
      title: "Low Connectivity Areas",
      description:
        "No Wi-Fi? No problem. GSM + offline ML works even in remote zones.",
      icon: "🌄",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] bg-radial from-indigo-700/30 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto my-8 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-300 mb-16 animate-fadeIn">
          Innovation & Impact
        </h2>

        {/* 🔬 Innovation */}
        <h3 className="text-3xl font-bold text-center text-indigo-400 mb-10 animate-slideInUp">
          What Makes TapShield Innovative?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {innovations.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* 🌍 Impact */}
        <h3 className="text-3xl font-bold text-center text-indigo-400 mb-10 animate-slideInUp">
          Real-World Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <FeatureCard
              key={index}
              title={impact.title}
              description={impact.description}
              icon={impact.icon}
            />
          ))}
        </div>

        {/* 🎬 Auto-Running PPT */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-indigo-400 mb-6 animate-fadeIn">
            How TapShield Works – Demo Slideshow 🎬
          </h3>
          <p className="text-indigo-200 mb-6 text-lg max-w-2xl mx-auto animate-slideInUp">
            From user action to emergency alert — a seamless 4-step mission.
          </p>
          <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border-2 border-indigo-700 shadow-lg bg-[#0f172a] transition-all duration-1000 ease-in-out animate-fadeIn animation-delay-500">
            <img
              src={slides[currentSlide].src}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto object-contain"
            />
            <p className="text-indigo-200 mt-4 text-lg font-medium transition-opacity duration-500">
              {slides[currentSlide].caption}
            </p>
          </div>
        </div>

        {/* ✨ Quote */}
        <p className="text-center text-indigo-200 text-xl italic mt-16 max-w-2xl mx-auto">
          "A single tap can be the difference between silence and survival."
        </p>
      </div>
    </section>
  );
};

export default Features;
