import { Link } from "react-router-dom";

import { Champion, Role, Type } from "../types/types";

interface Props {
  champion?: Champion;
  role?: Role;
  type?: Type;
}

export default function ChampionCard({ champion }: Props) {
  console.log(champion.name);

  return (
    <li
      className="card-champion"
      style={{ backgroundImage: `url(${champion.picture})` }}
    >
      <Link to={champion.slug}>
        <p className="card-champion-name">{champion.name}</p>
      </Link>
    </li>
  );
}
