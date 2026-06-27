import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          CONTACT
        </p>

        <h2 className="mt-2 text-4xl font-extrabold">
          Let's Work Together 🚀
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Have a project in mind or want to collaborate? Feel free to contact
          me. I'm always open to discussing new opportunities and exciting
          ideas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:YOUR_EMAIL@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Krishna,%20I%20visited%20your%20portfolio."
            className="flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
          >
            <FaEnvelope />
            Send Email
          </a>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-black px-8 py-4 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>

        <div className="mt-14 rounded-3xl bg-gray-100 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Get In Touch</h3>

          <div className="mt-8 space-y-4 text-lg">
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="text-blue-600 hover:underline"
              >
                krishnasonawane4649@gmail.com
              </a>
            </p>

            <p>
              📍 <strong>Location:</strong> Maharashtra, India
            </p>

            <p>
              💻 <strong>Available For:</strong> Full-Time • Internship •
              Freelance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}