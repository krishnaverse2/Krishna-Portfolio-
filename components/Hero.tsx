import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-[650px] px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
            <div className="blob-border absolute inset-0"></div>

            <div className="absolute inset-[12px] overflow-hidden rounded-full bg-white md:inset-[16px]">
              <img
                src="/profile.png"
                alt="Krishna Sonawane"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Intro */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-lg font-bold text-blue-500">
            Hi, I'm Krishna 👋
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#222] md:text-7xl">
            Software
            <br />
            Developer
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700 md:text-xl">
           A passionate <b>Software Engineer & Full Stack Developer</b> based in Maharashtra, India 📍. I design and build scalable web applications, cross-platform mobile apps, and robust backend systems with a focus on performance, clean architecture, and exceptional user experiences.
          </p>

          <div className="mt-8 flex justify-center gap-5 text-3xl md:justify-start">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-black px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-7 py-3 font-bold text-black transition hover:bg-black hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}