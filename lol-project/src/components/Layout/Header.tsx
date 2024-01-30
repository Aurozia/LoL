import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";

import Item from "./Item.tsx";
import { championList } from "../../store/reducers/champions.ts";
import { roleList } from "../../store/reducers/roles.ts";
import { typeList } from "../../store/reducers/types.ts";

export default function Header() {
  const dispatch = useAppDispatch();

  const champions = useAppSelector((state) => state.champions.list);

  const roles = useAppSelector((state) => state.roles.list);

  const types = useAppSelector((state) => state.types.list);

  const openChampionList = useAppSelector((state) => state.champions.header);
  const openRoleList = useAppSelector((state) => state.roles.header);
  const openTypeList = useAppSelector((state) => state.types.header);

  return (
    <header className="header">
      <Link to={"/"}>
        <h1>LoL</h1>
      </Link>
      <nav className="header-nav">
        <section className="header-menu">
          <button
            className={`menu-button ${openChampionList ? "clicked" : ""}`}
            type="button"
            onClick={() => {
              dispatch(championList(!openChampionList));
              if (openRoleList) dispatch(roleList(false));
              if (openTypeList) dispatch(typeList(false));
            }}
          >
            Champions
          </button>
          <ul
            className={`menu-champion ${
              openChampionList ? "visible " : "hidden"
            }`}
          >
            {champions.map((champion) =>
              openChampionList ? (
                <Item key={champion.id} champion={champion} />
              ) : (
                ""
              )
            )}
          </ul>
        </section>
        <section className="header-menu">
          <button
            className={`menu-button ${openRoleList ? "clicked" : ""}`}
            type="button"
            onClick={() => {
              dispatch(roleList(!openRoleList));
              if (openChampionList) dispatch(championList(false));
              if (openTypeList) dispatch(typeList(false));
            }}
          >
            Rôles
          </button>
          <ul
            className={`menu-champion ${openRoleList ? "visible " : "hidden"}`}
          >
            {roles.map((role) =>
              openRoleList ? <Item key={role.id} role={role} /> : ""
            )}
          </ul>
        </section>
        <section className="header-menu">
          <button
            className={`menu-button ${openTypeList ? "clicked" : ""}`}
            type="button"
            onClick={() => {
              dispatch(typeList(!openTypeList));
              if (openChampionList) dispatch(championList(false));
              if (openRoleList) dispatch(roleList(false));
            }}
          >
            Types
          </button>
          <ul
            className={`menu-champion ${openTypeList ? "visible " : "hidden"}`}
          >
            {types.map((type) =>
              openTypeList ? <Item key={type.id} type={type} /> : ""
            )}
          </ul>
        </section>
      </nav>
    </header>
  );
}
