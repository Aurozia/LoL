import { Link } from "react-router-dom";

import { Champion, Role, Type } from "../types/types";

interface Props {
  champion?: Champion;
  role?: Role;
  type?: Type;
}

export default function ChampionCard({ champion }: Props) {
  return (
    <li
      className="card-champion"
      style={{ backgroundImage: `url(${champion.picture})` }}
    >
      <Link to={`/champion/${champion.slug}`}>
        <p className="card-champion-name">{champion.name}</p>
      </Link>
    </li>
  );
}
