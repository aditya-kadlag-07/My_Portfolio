import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16
                 bg-gradient-to-b from-[#050816] via-[#0b0f2f] to-[#12002b]
                 text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-24 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-300" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
          Contact
        </p>

        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6
                     bg-gradient-to-r from-purple-400 to-indigo-400
                     bg-clip-text text-transparent"
        >
          Get In Touch
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Have a project, opportunity, or idea?  
          I’m always open to discussing new challenges and collaborations.
        </p>

        {/* Contact Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-3xl p-8 text-left
                       hover:border-purple-400/40
                       transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Let’s connect
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:adityakadlag2@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl
                           bg-white/5 border border-white/10
                           hover:border-purple-400 hover:text-purple-300
                           transition-all duration-300"
              >
                <FaEnvelope className="text-xl text-purple-400" />
                <span>adityakadlag2@gmail.com</span>
              </a>

              <a
                href="tel:+919322087770"
                className="flex items-center gap-4 p-4 rounded-xl
                           bg-white/5 border border-white/10
                           hover:border-indigo-400 hover:text-indigo-300
                           transition-all duration-300"
              >
                <FaPhoneAlt className="text-xl text-indigo-400" />
                <span>+91 93220 87770</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-kadlag-b27228320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl
                           bg-white/5 border border-white/10
                           hover:border-blue-400 hover:text-blue-300
                           transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/aditya-kadlag-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl
                           bg-white/5 border border-white/10
                           hover:border-gray-400 hover:text-gray-200
                           transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-3xl p-8
                       hover:border-indigo-400/40
                       transition-all duration-500 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl
                         bg-black/30 border border-white/10
                         focus:outline-none focus:border-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl
                         bg-black/30 border border-white/10
                         focus:outline-none focus:border-indigo-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl
                         bg-black/30 border border-white/10
                         focus:outline-none focus:border-pink-400"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3
                         py-4 rounded-full font-semibold
                         bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600
                         hover:scale-[1.03]
                         hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]
                         transition-all duration-300"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
