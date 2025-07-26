import React, { useState, useEffect } from "react";
import { FaMicrochip, FaBatteryFull, FaRobot } from "react-icons/fa";

const StackCategory = ({ title, items, icon, description }) => (
  <div className="bg-[#0f172a] p-8 rounded-2xl border border-indigo-700 shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp">
    <div className="flex justify-center mb-4 text-indigo-400 text-5xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-center text-indigo-300 mb-3">
      {title}
    </h3>
    <p className="text-gray-400 text-sm text-center mb-6">{description}</p>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-contain rounded-lg border border-indigo-600 p-1 bg-[#1e293b]"
          />
          <div>
            <p className="text-gray-300 text-lg font-medium">{item.name}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const TechStack = () => {
  const hardware = [
    {
      name: "Arduino Nano",
      image: "src/assets/images/arduino_nano.png",
      description: "Controls sensors and sends alerts.",
    },
    {
      name: "Piezo Sensor",
      image: "src/assets/images/piezo.png",
      description: "Detects tap vibrations.",
    },
    {
      name: "SIM800L GSM Module",
      image: "src/assets/images/sim800l.png",
      description: "Sends SMS using GSM network.",
    },
    {
      name: "Vibration Motor",
      image: "src/assets/images/vibration.png",
      description: "Provides haptic feedback.",
    },
  ];

  const softwareAI = [
    {
      name: "Edge Impulse",
      image: "src/assets/images/edge.png",
      description: "Trains the ML model for tap recognition.",
    },
    {
      name: "TinyML Inference Code",
      image: "src/assets/images/tinyml.png",
      description: "Runs the model on Arduino Nano.",
    },
    {
      name: "C++ (Arduino IDE)",
      image: "src/assets/images/c.png",
      description: "Controls logic and integrates hardware.",
    },
    {
      name: "Serial Monitor",
      image: "src/assets/images/serial.png",
      description: "Monitors live data from sensors.",
    },
  ];

  const powerSystem = [
    {
      name: "Li-ion 3.7V Battery",
      image: "src/assets/images/ion.png",
      description: "Main rechargeable battery source.",
    },
    {
      name: "TP4056 Charging Module",
      image: "src/assets/images/tp4056.png",
      description: "Used for safe charging.",
    },
    {
      name: "Voltage Regulator (5V)",
      image: "src/assets/images/buck-converter.png",
      description: "Maintains constant voltage.",
    },
  ];

  const pptSlides = [
    "src/assets/Ml-model-ppt/1.jpg",
    "src/assets/Ml-model-ppt/2.jpg",
    "src/assets/Ml-model-ppt/3.jpg",
    "src/assets/Ml-model-ppt/4.jpg",
    "src/assets/Ml-model-ppt/5.jpg",
    "src/assets/Ml-model-ppt/6.jpg",
    "src/assets/Ml-model-ppt/7.jpg",
    "src/assets/Ml-model-ppt/8.jpg",
    "src/assets/Ml-model-ppt/9.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % pptSlides.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="container mx-auto my-8 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-300 mb-16">
          Technology Stack
        </h2>

        <div className="mb-16 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Our Product */}
            <div className="text-center w-full md:w-1/2">
              <h3 className="text-2xl text-indigo-400 font-semibold mb-4">
                Our Product
              </h3>
              <img
                src="src/assets/prototype.png"
                alt="Prototype"
                className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg border border-indigo-700 mx-auto"
              />
            </div>

            {/* Circuit Diagram */}
            <div className="text-center w-full md:w-1/2">
              <h3 className="text-2xl text-indigo-400 font-semibold mb-4">
                Circuit Diagram
              </h3>
              <img
                src="src/assets/circuit-diagram.png"
                alt="Circuit Diagram"
                className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg border border-indigo-700 mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <StackCategory
            title="Hardware"
            items={hardware}
            icon={<FaMicrochip />}
            description="Controls and communication core"
          />
          <StackCategory
            title="Software & AI"
            items={softwareAI}
            icon={<FaRobot />}
            description="ML model + integration"
          />
          <StackCategory
            title="Power System"
            items={powerSystem}
            icon={<FaBatteryFull />}
            description="Power & regulation"
          />
        </div>

        <div className="bg-[#0f172a] px-4 py-8 sm:px-6 lg:px-12 border border-indigo-700 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-4">
            ML Model PPT Viewer
          </h3>

          <div className="w-full flex justify-center">
            <img
              src={pptSlides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] max-w-full h-auto rounded-lg border border-indigo-600 object-contain"
            />
          </div>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + pptSlides.length) % pptSlides.length
                )
              }
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full"
            >
              ◀ Back
            </button>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full"
            >
              {autoPlay ? "⏹ Stop" : "▶ Start Auto"}
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % pptSlides.length)
              }
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full"
            >
              ▶ Next
            </button>
          </div>

          <p className="text-indigo-200 mt-4 text-sm">
            Slide {currentSlide + 1} of {pptSlides.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
