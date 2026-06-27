export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Krishna<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}