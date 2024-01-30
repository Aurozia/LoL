import { useAppSelector } from "../hooks/redux.ts";

export default function ChampionData() {
  const champion = useAppSelector((state) => state.champions.list[0]);

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
          <article>
            <img
              className="data-champion-role"
              src={`${champion.role.picture}`}
              alt={`Role ${champion.role.name}`}
            />
            <p className="data-champion-info">{champion.role.name}</p>
          </article>
          <article>
            <img
              className="data-champion-type"
              src={`${champion.type.picture}`}
              alt={`Type ${champion.type.name}`}
            />
            <p className="data-champion-info">{champion.type.name}</p>
          </article>
        </div>
        <p className="data-champion-description">{champion.description}</p>
      </section>
    </div>
  );
}
