
// import { FaSearch } from "react-icons/fa";

// export default function SearchBar({ value, onChange }) {
//   return (
//     <div className="relative w-full mb-8">
//       <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//       <input
//         type="text"
//         placeholder="Search by author..."
//         value={value}
//         onChange={onChange}
//         className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm
//         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
//         transition duration-200"
//       />
//     </div>
//   );
// }
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full mb-10">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />

      <input
        type="text"
        placeholder="Search photographers..."
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
        placeholder-gray-400 transition"
      />

    </div>
  );
}