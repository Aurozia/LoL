import { Champion } from "../../types/types";

export function findChampion(champions: Champion[], searchedSlug: string) {
  const champion = champions.find((champion) => {
    return champion.slug === searchedSlug;
  });

  return champion;
}
