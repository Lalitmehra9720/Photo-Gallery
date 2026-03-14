import { useCallback, useMemo, useReducer, useState } from "react";

import useFetchPhotos from "../hooks/useFetchphotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";

import SearchBar from "../components/gallery/SearchBar";
import PhotoGrid from "../components/gallery/PhotoGrid";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";

import { FaCamera, FaSearch, FaHeart } from "react-icons/fa";

export default function GalleryPage() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  const toggleFav = (photo) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-14 px-6 text-center rounded-xl mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-3">Discover Beautiful Photos</h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Browse a collection of high-quality images from photographers around
          the world. Search by author name and save your favorite photos to
          revisit later.
        </p>

        <div className="flex justify-center gap-8 mt-6 text-sm items-center">
          <span className="flex items-center gap-2">
            <FaCamera className="text-xl flex items-center gap-2 hover:text-black transition" />
            Browse photos
          </span>

          <span className="flex items-center gap-2">
            <FaSearch className=" text-xl flex items-center gap-2 hover:text-yellow-500 transition" />
            Search photographers
          </span>

          <span className="flex items-center gap-2">
            <FaHeart  className=" text-xl flex items-center gap-2 hover:text-red-500 transition" />
            Save favourites
          </span>
        </div>
      </section>

      <div className="mb-6">
        <SearchBar value={search} onChange={handleSearch} />
      </div>

      <PhotoGrid
        photos={filteredPhotos}
        favourites={favourites}
        toggleFav={toggleFav}
      />
      
    </div>
  );
}
