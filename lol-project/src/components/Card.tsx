import { Link } from "react-router-dom";

import { Champion } from "../types/types";

interface Props {
  champion: Champion;
}

export default function Card({ champion }: Props) {
  return (
    <li
      className="card-champion"
      style={{ backgroundImage: `url(/${champion.picture})` }}
    >
      <Link to={`/champion/${champion.slug}`}>
        <p className="card-champion-name">{champion.name}</p>
      </Link>
    </li>
  );
}
