export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-16
                 bg-gradient-to-b from-[#050816] via-[#0b0f2f] to-[#12002b]
                 text-white overflow-hidden"
    >
      {/* Smooth transition glow from Hero */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2
                   w-[700px] h-[260px]
                   bg-purple-500/25 blur-[140px] rounded-full"
      />

      <div className="max-w-5xl mx-auto relative">
        {/* ✅ CENTERED & ANIMATED SECTION TITLE */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
            My Introduction
          </p>

          <h2
            className="text-4xl md:text-5xl font-extrabold
                       bg-gradient-to-r from-purple-400 to-indigo-400
                       bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </div>

        {/* 3D Glass Card */}
        <div
          className="
            relative
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl p-8 md:p-10
            shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            transition-all duration-700 ease-out
            transform-gpu
            hover:-translate-y-3
            hover:rotate-x-[4deg]
            hover:rotate-y-[-3deg]
            hover:shadow-[0_40px_120px_rgba(139,92,246,0.35)]
            hover:border-purple-400/50
          "
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Inner glow layer */}
          <div
            className="absolute inset-0 rounded-3xl
                       bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10
                       opacity-0 hover:opacity-100
                       transition-opacity duration-700 pointer-events-none"
          />

          <p className="text-gray-300 leading-8 text-lg">
            I’m{" "}
            <span className="text-white font-semibold">
              Aditya Pandit Kadlag
            </span>
            , a fresher{" "}
            <span className="text-purple-400">
              Java Full Stack Developer
            </span>{" "}
            passionate about building immersive, scalable, and
            performance-driven digital products.
          </p>

          <p className="text-gray-400 leading-8 mt-5">
            I work with{" "}
            <strong className="text-gray-200">
              Java, Spring Boot, REST APIs, MySQL
            </strong>{" "}
            on the backend and{" "}
            <strong className="text-gray-200">
              React + Vite, Tailwind CSS
            </strong>{" "}
            on the frontend. I focus on clean architecture, readable
            code, and modern UI experiences.
          </p>

          <p className="text-gray-400 leading-8 mt-5">
            Currently, I’m exploring real-world system design,
            deployment workflows, and contributing to
            production-ready applications while preparing myself
            for impactful roles in the industry.
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-sm">
            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Name:</span>{" "}
                Aditya Pandit Kadlag
              </p>
              <p>
                <span className="text-gray-400">Role:</span>{" "}
                Java Full Stack Developer
              </p>
              <p>
                <span className="text-gray-400">Experience:</span>{" "}
                Fresher
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Location:</span>{" "}
                Pune, India
              </p>
              <p>
                <span className="text-gray-400">Email:</span>{" "}
                adityakadlag2@gmail.com
              </p>
              <p>
                <span className="text-gray-400">Availability:</span>{" "}
                Open to opportunities
              </p>
            </div>
          </div>

          {/* Quote */}
          <p className="mt-8 italic text-gray-400 border-l-4 border-purple-500 pl-4">
            “Design is intelligence made visible. Code brings it to life.”
          </p>
        </div>
      </div>
    </section>
  );
}
