import { Link, useParams } from "react-router-dom";

import { useAppSelector } from "../hooks/redux.ts";
import { findChampion } from "../store/selectors/champions.ts";

export default function ChampionData() {
  const { slug } = useParams();

  const champion = useAppSelector((state) =>
    findChampion(state.champions.list, slug as string)
  );

  if (!champion) {
    return <div>Champion non trouvé</div>;
  }
  return (
    <div className="data-champion">
      <img
        className="data-champion-picture"
        src={`/${champion.picture}`}
        alt={`League of Legends Champion ${champion.name}`}
      />
      <section className="data-champion-section">
        <h3>
          {champion.name}
          <span>{champion.alias}</span>
        </h3>

        <p className="data-champion-date">
          Date de sortie : {champion.release_date}
        </p>

        <div className="wrapper">
          <Link to={`/role/${champion.role.slug}`}>
            <article>
              <img
                className="data-champion-role"
                src={`${champion.role.picture}`}
                alt={`Role ${champion.role.name}`}
              />
              <p className="data-champion-info">{champion.role.name}</p>
            </article>
          </Link>
          <Link to={`/type/${champion.type.slug}`}>
            <article>
              <img
                className="data-champion-type"
                src={`${champion.type.picture}`}
                alt={`Type ${champion.type.name}`}
              />
              <p className="data-champion-info">{champion.type.name}</p>
            </article>
          </Link>
        </div>
        <p className="data-champion-description">{champion.description}</p>
      </section>
    </div>
  );
}
