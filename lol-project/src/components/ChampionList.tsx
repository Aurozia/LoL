import { useAppSelector } from "../hooks/redux.ts";

import Card from "./Card.tsx";

export default function ChampionList() {
  const champions = useAppSelector((state) => state.champions.list);

  return (
    <>
      <h2>Liste des champions</h2>
      <ul className="list">
        {champions.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </ul>
    </>
  );
}
