import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiMongodb, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-16
                 bg-gradient-to-b from-[#050816] via-[#0b0f2f] to-[#12002b]
                 text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl animate-pulse delay-300" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
          Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6
                       bg-gradient-to-r from-purple-400 to-indigo-400
                       bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          A modern, production-focused tech stack I use to build scalable,
          performant, and clean applications.
        </p>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Programming */}
          <SkillCard title="Programming Languages" color="purple">
            <Skill icon={<FaJava />} label="Java" />
            <Skill icon={<FaJs />} label="JavaScript" />
          </SkillCard>

          {/* Frontend */}
          <SkillCard title="Frontend" color="indigo">
            <Skill icon={<FaHtml5 />} label="HTML5" />
            <Skill icon={<FaCss3Alt />} label="CSS3" />
            <Skill icon={<FaBootstrap />} label="Bootstrap" />
            <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
            <Skill icon={<FaReact />} label="React" />
          </SkillCard>

          {/* Backend & Tools */}
          <SkillCard title="Backend & Tools" color="pink">
            <Skill icon={<SiSpringboot />} label="Spring Boot" />
            <Skill icon={<FaNodeJs />} label="Node.js" />
            <Skill icon={<SiMysql />} label="MySQL" />
            <Skill icon={<SiMongodb />} label="MongoDB" />
            <Skill icon={<FaAws />} label="AWS" />
            <Skill icon={<FaGithub />} label="GitHub" />
            <Skill icon={<SiPostman />} label="Postman" />
            <Skill icon={<VscCode />} label="VS Code" />
            <Skill icon={<DiEclipse />} label="Eclipse IDE" />
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function SkillCard({ title, color, children }) {
  const glow =
    color === "purple"
      ? "hover:border-purple-400/50 hover:shadow-[0_0_45px_rgba(139,92,246,0.25)]"
      : color === "indigo"
      ? "hover:border-indigo-400/50 hover:shadow-[0_0_45px_rgba(99,102,241,0.25)]"
      : "hover:border-pink-400/50 hover:shadow-[0_0_45px_rgba(236,72,153,0.25)]";

  const titleColor =
    color === "purple"
      ? "text-purple-300"
      : color === "indigo"
      ? "text-indigo-300"
      : "text-pink-300";

  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10
                  rounded-3xl p-8
                  transform hover:-translate-y-2
                  transition-all duration-500 ${glow}`}
    >
      <h3 className={`text-xl font-semibold mb-6 ${titleColor}`}>
        {title}
      </h3>

      <div className="flex flex-wrap gap-4 justify-center">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, label }) {
  return (
    <span
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                 border border-white/20 bg-white/5
                 hover:scale-105 hover:border-white/40
                 transition-all duration-300"
    >
      <span className="text-lg">{icon}</span>
      {label}
    </span>
  );
}
