import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-6">
        <p className="text-sm opacity-90">© 2026 Photo Gallery App</p>

        <a
          href="https://github.com/Lalitmehra9720/Photo-Gallery.git"
          className="flex items-center gap-2 text-sm hover:text-pink-200 transition"
        >
          <FaGithub />
          View Source Code
        </a>
      </div>
    </footer>
  );
}
