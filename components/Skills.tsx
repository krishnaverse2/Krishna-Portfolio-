import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <FaReact className="text-sky-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white px-5 py-16">
      <h2 className="text-center text-3xl font-extrabold">Tech Stack</h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-blue-500" />

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex h-24 flex-col items-center justify-center rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-3xl">{skill.icon}</div>
            <p className="mt-2 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}