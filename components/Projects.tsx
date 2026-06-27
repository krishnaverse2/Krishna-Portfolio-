import { FaGlobe } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const projects = [
  {
    title: "SAKHI",
    type: "Healthcare",
    image: "/sakhi.png",
    desc: "SAKHI is a dedicated healthcare platform designed to make women's health more accessible, informative, and convenient. It brings together trusted doctors, certified yoga trainers, health blogs, disease awareness, home remedies, healthcare products, pregnancy and period tracking, and wellness resources in one place. With an upcoming mobile application, SAKHI aims to empower women with reliable healthcare support anytime, anywhere.",
    tech: ["React Native", "Laravel", "MySQL", "REST API"],
    live: "https://sakhihealthcare.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f7f7f7] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-extrabold uppercase tracking-wider text-blue-500">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-extrabold">My Recent Work</h2>

        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-white p-7 shadow-lg transition hover:shadow-2xl"
            >
              <div className="flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[550px] w-auto rounded-2xl object-contain"
                />
              </div>

              <h3 className="mt-10 text-3xl font-extrabold">
                {project.title}{" "}
                <span className="text-[#009688]">| {project.type}</span>
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {project.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#E8F8F6] px-6 py-3 font-semibold text-[#009688]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 items-start gap-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border bg-white text-lg font-semibold shadow-sm transition-all hover:bg-[#009688] hover:text-white"
                >
                  <FaGlobe size={32} />
                  <span className="mt-3 text-center">
                    Check
                    <br />
                    Live
                  </span>
                </a>

                <div className="flex flex-col gap-4">
                  <button
                    disabled
                    className="relative flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-5 py-5 text-lg font-semibold text-gray-500"
                  >
                    <span className="absolute -top-3 right-3 rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-white">
                      Coming Soon
                    </span>
                    <SiGoogleplay size={26} />
                    Play Store
                  </button>

                  <button
                    disabled
                    className="relative flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-5 py-5 text-lg font-semibold text-gray-500"
                  >
                    <span className="absolute -top-3 right-3 rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-white">
                      Coming Soon
                    </span>
                    <SiAppstore size={26} />
                    App Store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}