import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaCertificate,
  FaVolumeUp,
} from "react-icons/fa";

export default function Hero() {
  const hasSpokenRef = useRef(false);

  // 🔊 SPEAK FUNCTION
  const speakIntro = () => {
    if (!window.speechSynthesis) return;

    const text =
      "Hello. My name is Aditya Kadlag. I am a Java Full Stack Developer. Welcome to my portfolio.";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const indianVoice =
      voices.find((v) => v.lang === "en-IN") ||
      voices.find((v) => v.name.toLowerCase().includes("india"));

    if (indianVoice) utterance.voice = indianVoice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasSpokenRef.current) {
        hasSpokenRef.current = true;
        speakIntro();
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center
                 pt-28 pb-20 px-6 md:px-16
                 text-white overflow-hidden
                 bg-gradient-to-br from-[#050816] via-[#0b0f2f] to-[#12002b]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-3xl space-y-5">
          <p className="uppercase tracking-[0.32em] text-sm text-gray-400">
            Java Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Aditya Kadlag
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            Java + Spring Boot on the backend, React on the frontend — building
            scalable, secure, and performance-driven products.
          </p>

          {/* CONTACT */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
              <FaEnvelope /> adityakadlag2@gmail.com
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
              <FaPhoneAlt /> +91 93220 87770
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full font-semibold
                         bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600"
            >
              Let’s work together
            </a>

            <a
              href="/Aditya_Kadlag_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-semibold border border-white/30"
            >
              View Resume
            </a>

            <a
              href="/Java_FullStack_Certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-semibold border border-purple-400/40 flex items-center gap-2"
            >
              <FaCertificate />
              Certifications
            </a>

            <button
              onClick={speakIntro}
              className="px-6 py-2.5 rounded-full font-semibold
                         border border-green-400/40 text-green-300
                         hover:bg-green-500/10 flex items-center gap-2"
            >
              <FaVolumeUp />
              Voice Intro
            </button>
          </div>

          {/* SOCIAL ICONS (ENLARGED + GLOW) */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/aditya-kadlag-07"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-white
                         hover:scale-125
                         hover:text-gray-300
                         hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
                         transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-kadlag-b27228320/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-blue-400
                         hover:scale-125
                         hover:text-blue-300
                         hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.8)]
                         transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – 3D ADITYA LOGO */}
        <div className="hidden md:flex justify-center items-center perspective-[1200px]">
          <div
            className="relative transform-gpu
                       animate-[float_6s_ease-in-out_infinite]
                       hover:rotate-y-12 hover:-rotate-x-6
                       transition-transform duration-700"
          >
            <span
              className="text-[120px] font-extrabold tracking-widest
                         bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400
                         bg-clip-text text-transparent
                         drop-shadow-[0_30px_60px_rgba(139,92,246,0.6)]"
            >
              ADITYA
            </span>

            {/* Glow */}
            <div
              className="absolute inset-0 -z-10 blur-3xl
                         bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-pink-600/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
