export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-cyan-400">Hello, I am</p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Krishna <br />
            <span className="text-cyan-400">Sonawane</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-gray-400">
            I build modern web and mobile applications using React, Next.js,
            React Native, Laravel, MySQL, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
            <div className="rounded-2xl bg-[#050816] p-8 text-center">
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-cyan-400 text-6xl font-bold text-black">
                KS
              </div>

              <h3 className="mt-6 text-2xl font-bold">Developer Portfolio</h3>
              <p className="mt-2 text-gray-400">
                React • Next.js • Laravel • React Native
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}