import { FaCamera } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-linear-to-r from-purple-600 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white hover:text-black cursor-pointer">
          <a href="/" className="flex gap-2 items-center justify-center">
            <FaCamera size={24} />

            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              Photo Gallery
            </h1>
          </a>
        </div>

        <p className="text-purple-100 text-sm mt-2 md:mt-0">
          Search photographers
        </p>
      </div>
    </header>
  );
}
