import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";

export default function About() {
  return (
    <section id="about" className="bg-[#f7f7f7] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Top Full Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-blue-500">
            About Me
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-snug text-[#222] md:text-4xl">
            A passionate Software Developer based in Maharashtra, India 📍
          </h2>
        </div>

        {/* Bottom Two Columns */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <img
                src="/profile.png"
                alt="Krishna Sonawane"
                className="rounded-3xl shadow-xl"
              />

              <div className="absolute bottom-6 right-[-8px] rounded-xl bg-white px-5 py-4 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-500">1+ Years</h3>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Info */}
          <div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
                <FaLaptopCode className="text-2xl text-blue-500" />
                <span className="font-semibold">Frontend Development</span>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
                <HiCodeBracket className="text-2xl text-blue-500" />
                <span className="font-semibold">Backend Integration</span>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-lg">
                <FaMobileAlt className="text-2xl text-blue-500" />
                <span className="font-semibold">Mobile Development</span>
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              I build modern, responsive, and user-friendly web and mobile
              applications. I enjoy turning ideas into real digital products
              with clean UI, smooth user experience, and strong backend
              integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}