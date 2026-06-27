import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";

export default function About() {
  return (
    <section id="about" className="bg-[#f7f7f7] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto w-full max-w-sm">
          <img
            src="/profile.png"
            alt="Krishna Sonawane"
            className="rounded-3xl shadow-xl"
          />

          <div className="absolute bottom-6 right-[-8px] rounded-xl bg-white px-5 py-4 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-500">1+ Years</h3>
            <p className="text-sm text-gray-600">Experience</p>
          </div>

          <div className="absolute -bottom-6 left-6 -z-10 h-24 w-[90%] rounded-3xl bg-blue-100" />
        </div>

        <div className="mt-16">
          <p className="text-sm font-extrabold uppercase tracking-wider text-blue-500">
            About Me
          </p>

          <h2 className="mt-8 max-w-xl text-3xl font-extrabold leading-snug text-[#222]">
            A passionate Software Developer based in Maharashtra, India 📍
          </h2>

          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-5">
            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
              <FaLaptopCode className="text-2xl text-blue-500" />
              <span className="font-semibold">Frontend Development</span>
            </div>

            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
              <HiCodeBracket className="text-2xl text-blue-500" />
              <span className="font-semibold">Backend Integration</span>
            </div>

            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
              <FaMobileAlt className="text-2xl text-blue-500" />
              <span className="font-semibold">Mobile Development</span>
            </div>
          </div>

          <p className="mt-12 text-lg leading-8 text-gray-700">
            As a Software Developer, I bring a strong skill set across{" "}
            <span className="text-blue-500">
              front-end and back-end technologies, including HTML, CSS,
              JavaScript, TypeScript, React, React Native, Next.js, Redux,
              Tailwind CSS, Laravel, MySQL, Firebase, and API integration.
            </span>{" "}
            I specialize in building responsive, high-performance applications
            with clean UI, optimized code, and smooth user experience.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            My main project is <b>SAKHI Healthcare</b>, a healthcare platform
            that includes doctors, yoga trainers, disease information, products,
            blogs, authentication, admin dashboard, and mobile app features.
          </p>
        </div>
      </div>
    </section>
  );
}