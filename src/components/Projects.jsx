import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiOpenai } from "react-icons/si";

/* ✅ IMPORT IMAGES (Vite best practice) */
import ecommerceImg from "../assets/ecommerce images.avif";
import quizImg from "../assets/newquize image.webp";
import portfolioImg from "../assets/portfolio.jpg";

export default function Projects() {
  const projects = [
    {
      title: "E-Mart",
      subtitle: "E-Commerce Platform",
      tech: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      img: ecommerceImg,
    },
    {
      title: "GenAI-Quizy",
      subtitle: "AI Powered Quiz Platform",
      tech: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "GenAI", icon: <SiOpenai /> },
      ],
      img: quizImg,
    },
    {
      title: "AK’s Portfolio",
      subtitle: "Personal Portfolio Website",
      tech: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
      img: portfolioImg,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16
                 bg-gradient-to-b from-[#12002b] via-[#0b0f2f] to-[#050816]
                 text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-300" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
          My Work
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                       bg-gradient-to-r from-purple-400 to-indigo-400
                       bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          A selection of real-world projects showcasing full-stack development,
          scalable architecture, and modern UI design.
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-purple-400/40
                         transition-all duration-500
                         hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]
                         hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover
                             group-hover:scale-110
                             transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-1 text-white">
                  {project.title}
                </h3>
                <p className="text-purple-300 text-sm mb-5">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1.5
                                 text-xs rounded-full
                                 border border-white/20
                                 bg-white/5
                                 text-gray-200
                                 hover:border-indigo-400 hover:text-indigo-300
                                 transition-all duration-300"
                    >
                      <span className="text-base">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
