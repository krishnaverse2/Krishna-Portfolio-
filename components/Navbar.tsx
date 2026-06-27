import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <h1 className="text-xl font-bold">👨‍💻 Portfolio</h1>

        <div className="hidden gap-7 font-semibold md:flex">
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <Menu className="md:hidden" size={30} />
      </div>
    </nav>
  );
}