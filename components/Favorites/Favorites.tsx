// import { useFavoritesStore } from "@/stores/useFavoritesStore";

// type Props = {
//   favorites: string[];
//   toggleFavorite: (id: string) => void;
//   isFavorite: (id: string) => boolean;
// };

// export const FavoritesList = ({ truckId }: Props) => {
//   const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
//   const isFavorite = useFavoritesStore((s) => s.isFavorite);

//   return (
//     <button onClick={() => toggleFavorite(truckId)}>
//       {isFavorite(truckId) ? "❤️" : "🤍"}
//       {/* <svg>
//         <use />
//       </svg> */}
//     </button>
//   );
// };

import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesState = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const favs = get().favorites.includes(id)
          ? get().favorites.filter((f) => f !== id)
          : [...get().favorites, id];
        set({ favorites: favs });
      },
      isFavorite: (id) => get().favorites.includes(id),
    }),
    { name: "favorites" },
  ),
);
