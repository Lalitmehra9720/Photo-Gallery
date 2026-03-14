import PhotoCard from "./PhotoCard";

export default function PhotoGrid({
  photos,
  favourites,
  toggleFav,
}) {

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

      {photos.map((photo) => {

        const isFav = favourites.some(
          (f) => f.id === photo.id
        );

        return (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={isFav}
            toggleFav={toggleFav}
          />
        );

      })}
    </div>
  );
}