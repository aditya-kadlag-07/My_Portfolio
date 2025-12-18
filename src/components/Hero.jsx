import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center
                 pt-28 pb-20 px-6 md:px-16
                 bg-gradient-to-br from-[#050816] via-[#0b0f2f] to-[#12002b]
                 text-white overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-200" />
      </div>

      <div className="max-w-3xl space-y-5">
        {/* Tagline */}
        <p className="uppercase tracking-[0.32em] text-sm text-gray-400">
          Java Full Stack Developer
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Aditya Kadlag
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
          Java + Spring Boot on the backend, React on the frontend — delivering
          clean, scalable, and performance-driven products.
        </p>

        {/* Contact Chips */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="mailto:adityakadlag2@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/20 bg-white/5 backdrop-blur-md
                       hover:border-purple-400 hover:text-purple-300
                       transition-all duration-300"
          >
            <FaEnvelope />
            adityakadlag2@gmail.com
          </a>

          <a
            href="tel:+919322087770"
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/20 bg-white/5 backdrop-blur-md
                       hover:border-indigo-400 hover:text-indigo-300
                       transition-all duration-300"
          >
            <FaPhoneAlt />
            +91 93220 87770
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full font-semibold
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
                       transition-all duration-300"
          >
            Let’s work together
          </a>

          <a
            href="/Aditya_Kadlag_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-semibold
                       border border-white/30 backdrop-blur-md
                       hover:bg-white/10 hover:scale-105
                       transition-all duration-300"
          >
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4 mb-4">
          <a
            href="https://github.com/aditya-kadlag-07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/20 bg-white/5
                       hover:bg-white/10 hover:border-gray-400
                       transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kadlag-b27228320/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/20 bg-white/5
                       hover:bg-blue-500/20 hover:border-blue-400
                       transition-all duration-300"
          >
            <FaLinkedin className="text-lg text-blue-400" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
