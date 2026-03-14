
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import ImageSkeleton from "../ui/ImageSkeleton";

// export default function PhotoCard({ photo, isFav, toggleFav }) {

//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden max-w-sm mx-auto hover:scale-105 transition duration-300">

//       <div className="relative w-full h-48 md:h-52 lg:h-56 overflow-hidden">

//         {!imageLoaded && <ImageSkeleton />}

//         <img
//           loading="lazy"
//           src={photo.download_url}
//           alt={photo.author}
//           onLoad={() => setImageLoaded(true)}
//           className={`w-full h-full object-cover transition-opacity duration-500 ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           }`}
//         />

//       </div>

//       <div className="flex justify-between items-center p-3">
//         <p className="text-sm font-medium truncate">
//           {photo.author}
//         </p>

//         <button
//           onClick={() => toggleFav(photo)}
//           className="text-xl hover:scale-110 transition"
//         >
//           {isFav ? (
//             <FaHeart className="text-red-500" />
//           ) : (
//             <FaHeart className="text-zinc-300" />
//           )}
//         </button>
//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import ImageSkeleton from "../ui/ImageSkeleton";

export default function PhotoCard({ photo, isFav, toggleFav }) {

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden max-w-sm mx-auto hover:scale-105 transition duration-300 border border-gray-100">

      <div className="relative w-full h-48 md:h-52 lg:h-56 overflow-hidden">

        {!imageLoaded && <ImageSkeleton />}

        <img
          loading="lazy"
          src={photo.download_url}
          alt={photo.author}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

      </div>

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-semibold text-gray-700 truncate">
          {photo.author}
        </p>

        <button
          onClick={() => toggleFav(photo)}
          className="text-xl hover:scale-110 transition"
        >
          {isFav ? (
            <FaHeart className="text-pink-500 drop-shadow-sm" />
          ) : (
            <FaHeart className="text-gray-300 hover:text-pink-200 transition" />
          )}
        </button>

      </div>

    </div>
  );
}