import { useFavoritesStore } from "@/stores/useFavoritesStore";

type Props = {
  truckId: string;
};

export const FavoritesList = ({ truckId }: Props) => {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);

  return (
    <button onClick={() => toggleFavorite(truckId)}>
      {isFavorite(truckId) ? "❤️" : "🤍"}
      {/* <svg>
        <use />
      </svg> */}
    </button>
  );
};
