import { useParams } from "react-router-dom";

import { useAppSelector } from "../hooks/redux.ts";

import Card from "./Card.tsx";

export default function RoleList() {
  const { slug } = useParams();

  const champions = useAppSelector((state) => state.champions.list);

  const filteredList = champions.filter(
    (champion) => champion.role.slug === slug
  );

  return (
    <>
      <h2>Liste des champions avec le rôle {slug}</h2>
      <ul className="list">
        {filteredList.map((champion) => (
          <Card key={champion.id} champion={champion} />
        ))}
      </ul>
    </>
  );
}
