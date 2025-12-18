import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6
                 bg-gradient-to-b from-[#050816] to-black
                 text-gray-400 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute right-1/4 top-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-300" />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand */}
        <h3
          className="text-2xl md:text-3xl font-extrabold
                     bg-gradient-to-r from-purple-400 to-indigo-400
                     bg-clip-text text-transparent"
        >
          ADITYA.KADLAG
        </h3>

        <p className="max-w-xl mx-auto text-gray-400">
          Crafting performant, scalable, and visually engaging digital
          experiences with modern technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/aditya-kadlag-07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center
                       rounded-full border border-white/20
                       bg-white/5 backdrop-blur-md
                       hover:border-purple-400 hover:text-purple-300
                       hover:scale-110
                       transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kadlag-b27228320/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center
                       rounded-full border border-white/20
                       bg-white/5 backdrop-blur-md
                       hover:border-blue-400 hover:text-blue-400
                       hover:scale-110
                       transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>

          <a
            href="mailto:adityakadlag2@gmail.com"
            className="w-12 h-12 flex items-center justify-center
                       rounded-full border border-white/20
                       bg-white/5 backdrop-blur-md
                       hover:border-pink-400 hover:text-pink-400
                       hover:scale-110
                       transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-8" />

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-4">
          © {new Date().getFullYear()} Aditya Kadlag. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
