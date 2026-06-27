import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex min-h-[650px] flex-col items-center justify-center px-5 text-center">
      <div className="relative mb-8 flex h-64 w-64 items-center justify-center">
        {/* Moving blob border only */}
        <div className="blob-border absolute inset-0"></div>

        {/* Fixed profile image */}
        <div className="absolute inset-[10px] overflow-hidden rounded-full bg-white">
          <img
            src="/profile.png"
            alt="Krishna Sonawane"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Software <br /> Developer <span>👋🏻</span>
      </h1>

      <p className="mt-6 max-w-md text-lg text-gray-700">
        Hi, I'm <b>Krishna Sonawane.</b> A passionate Full Stack Developer based
        in Maharashtra, India 📍
      </p>

      <div className="mt-8 flex gap-5 text-3xl">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <a
        href="#projects"
        className="mt-8 rounded-full bg-black px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105"
      >
        View My Work
      </a>
    </section>
  );
}