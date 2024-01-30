import { useParams } from "react-router-dom";

import { useAppSelector } from "../hooks/redux.ts";

import Card from "./Card.tsx";

export default function TypeList() {
  const { slug } = useParams();

  const champions = useAppSelector((state) => state.champions.list);

  const filteredList = champions.filter(
    (champion) => champion.type.slug === slug
  );

  return (
    <>
      <h2>Liste des champions de type {slug}</h2>
      <ul className="list">
        {filteredList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </ul>
    </>
  );
}
