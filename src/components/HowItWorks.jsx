import React, { useState, useEffect, useRef } from "react";

const StepCard = ({ number, title, description, delay }) => (
  <div
    className="flex flex-col items-center text-center bg-[#0f172a] p-8 rounded-xl shadow-md border border-indigo-700 hover:shadow-indigo-600/30 transition-transform duration-300 transform hover:-translate-y-1 animate-slideInUp text-white"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white rounded-full text-3xl font-bold mb-6 shadow-md">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-indigo-300 mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "User taps a preset pattern",
      description:
        "A simple, custom tap pattern on the wearable device initiates the process.",
    },
    {
      number: 2,
      title: "Tap Detected & AI Recognition",
      description:
        "The on-device TinyML model instantly identifies the distress tap pattern.",
    },
    {
      number: 3,
      title: "GSM Triggered",
      description:
        "Upon recognition, the SIM800L module is activated to send an alert.",
    },
    {
      number: 4,
      title: "Emergency Help",
      description:
        "Guardian or emergency contacts receive an SOS SMS with live location.",
    },
  ];

  // PPT State
  const slideImages = [
    "src/assets/complete-ppt/1.png",
    "src/assets/complete-ppt/2.png",
    "src/assets/complete-ppt/3.png",
    "src/assets/complete-ppt/4.png",
    "src/assets/complete-ppt/5.png",
    "src/assets/complete-ppt/6.png",
    "src/assets/complete-ppt/7.png",
    "src/assets/complete-ppt/8.png",
    "src/assets/complete-ppt/9.png",
    "src/assets/complete-ppt/10.png",
    "src/assets/complete-ppt/11.png",
    "src/assets/complete-ppt/12.png",
    "src/assets/complete-ppt/13.png",
    "src/assets/complete-ppt/14.png",
    "src/assets/complete-ppt/15.png",

  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  // Auto slide effect
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const handleStop = () => {
    setAutoPlay(false);
    clearInterval(intervalRef.current);
  };

  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#0d1117] via-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      {/* Glow Shield */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-radial from-indigo-800/30 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto my-8 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-300 mb-6 animate-fadeIn">
          How It Works?
        </h2>

        {/* PPT Viewer */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
            📊 Complete Model Presentation
          </h3>
          <div className="border-2 border-indigo-700 rounded-xl overflow-hidden shadow-xl bg-[#0f172a]">
            <img
              src={slideImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
            >
              ⬅️ Previous
            </button>
            <button
              onClick={handleStop}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition text-white font-semibold"
            >
              🛑 Stop Auto
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
            >
              Next ➡️
            </button>
          </div>
        </div>
        {/* Arduino Code Section */}
        <div className="mt-24 max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
            ⚙️ Arduino Code Used in TapShield
          </h3>
          <div className="bg-[#0f172a] border border-indigo-700 rounded-xl shadow-lg p-6 overflow-auto text-sm text-gray-200 font-mono max-h-[500px]">
            <pre>
              {`#include <TapShield_inferencing.h>
#include <SoftwareSerial.h>

#define PIEZO_PIN A0
#define BUFFER_SIZE 100

float signalBuffer[BUFFER_SIZE];

// SIM800L config
#define SIM_TX 8
#define SIM_RX 7
SoftwareSerial sim800(SIM_TX, SIM_RX);

// Edge Impulse signal wrapper
int getSignalData(size_t offset, size_t length, float *out_ptr) {
  memcpy(out_ptr, &signalBuffer[offset], length * sizeof(float));
  return 0;
}

void setup() {
  Serial.begin(9600);
  sim800.begin(9600);
  pinMode(PIEZO_PIN, INPUT);
  delay(3000); // Give SIM800L time to initialize

  Serial.println("🤖 TapShield ML System Started...");
  sendSMS("+91XXXXXXXXXX", "apShield armed and ready!"); // Replace with your number
}

void loop() {
  // Fill signal buffer with analog samples
  for (int i = 0; i < BUFFER_SIZE; i++) {
    signalBuffer[i] = analogRead(PIEZO_PIN);
    delay(10); // Sampling interval
  }

  // Run Edge Impulse inference
  ei_impulse_result_t result;
  signal_t signal;
  signal.total_length = BUFFER_SIZE;
  signal.get_data = &getSignalData;

  EI_IMPULSE_ERROR res = run_classifier(&signal, &result, false);
  if (res != EI_IMPULSE_OK) {
    Serial.print("Inference failed: ");
    Serial.println(res);
    return;
  }

  // Check predicted label
  String detectedLabel = "";
  float highestConfidence = 0.0;

  for (size_t i = 0; i < EI_CLASSIFIER_LABEL_COUNT; i++) {
    float conf = result.classification[i].value;
    Serial.print(result.classification[i].label);
    Serial.print(": ");
    Serial.println(conf);

    if (conf > highestConfidence) {
      highestConfidence = conf;
      detectedLabel = result.classification[i].label;
    }
  }

  // Act on top result
  if (highestConfidence > 0.80) { // You may adjust threshold
    if (detectedLabel == "one_tap") {
      sendSMS("+91XXXXXXXXXX", "I am Safe.");
    } else if (detectedLabel == "two_tap") {
      sendSMS("+91XXXXXXXXXX", "Please Call Me.");
    } else if (detectedLabel == "three_tap") {
      sendSMS("+91XXXXXXXXXX", "EMERGENCY! Need Help Immediately.");
    } else {
      Serial.println("Unrecognized pattern.");
    }
  }

  delay(2000); // Wait between cycles
}

// Function to send SMS using SIM800L
void sendSMS(String number, String message) {
  Serial.println("Sending SMS: " + message);
  sim800.println("AT+CMGF=1"); delay(500);
  sim800.print("AT+CMGS=\"");
  sim800.print(number);
  sim800.println("\"");
  delay(500);
  sim800.print(message);
  sim800.write(26); // Ctrl+Z
  delay(5000);
  Serial.println("✅ SMS Sent");
}


}`}
            </pre>
          </div>
        </div>
        {/* Arduino Downloads */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* GitHub Link */}
          <a
            href="https://github.com/Vikramsolanki12/TapShield" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
          >
            🔗 View Arduino Code on GitHub
          </a>

          {/* Library ZIP Download */}
          <a
            href="src/downloads/TapShield_Library.zip" 
            download
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
          >
            📦 Download Required Library
          </a>
        </div>

        {/* Subtitle */}
        <p className="py-8 text-center text-indigo-200 text-xl italic mb-12 animate-slideInUp animation-delay-300">
          "From Tap to Rescue – under 2 Seconds"
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Icon Timeline */}
        <div className="mt-20 flex justify-center items-center">
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-500 text-3xl mb-2 animate-pulse">
              👆
            </div>
            <p className="text-gray-300 font-medium">Tap Input</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-400 mx-4 rounded-full animate-pulse"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-500 text-3xl mb-2 animate-pulse animation-delay-300">
              🧠
            </div>
            <p className="text-gray-300 font-medium">AI Recognition</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-400 mx-4 rounded-full animate-pulse animation-delay-600"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-500 text-3xl mb-2 animate-pulse animation-delay-900">
              📡
            </div>
            <p className="text-gray-300 font-medium">GSM Trigger</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-indigo-400 mx-4 rounded-full animate-pulse animation-delay-1200"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="text-indigo-500 text-3xl mb-2 animate-pulse animation-delay-1500">
              🚨
            </div>
            <p className="text-gray-300 font-medium">SOS Alert</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
