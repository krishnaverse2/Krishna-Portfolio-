import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="text-2xl">👨‍💻</span>
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </a>

        <nav className="hidden items-center gap-8 text-lg font-semibold md:flex">
          <a href="#skills" className="hover:text-[#009688]">Skills</a>
          <a href="#about" className="hover:text-[#009688]">About</a>
          <a href="#experience" className="hover:text-[#009688]">Experience</a>
          <a href="#projects" className="hover:text-[#009688]">Projects</a>
          <a href="#contact" className="hover:text-[#009688]">Contact</a>
        </nav>

        <Menu className="md:hidden" size={32} />
      </div>
    </header>
  );
}