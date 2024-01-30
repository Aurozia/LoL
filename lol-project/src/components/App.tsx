import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { useAppDispatch } from "../hooks/redux.ts";

import Layout from "./Layout/Layout.tsx";
import ChampionList from "./ChampionList";
import ChampionData from "./ChampionData";
import RoleList from "./RoleList";
import TypeList from "./TypeList";
import Error from "./Error";

import { championList } from "../store/reducers/champions.ts";
import { roleList } from "../store/reducers/roles.ts";
import { typeList } from "../store/reducers/types.ts";

export default function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(championList(false));
    dispatch(roleList(false));
    dispatch(typeList(false));
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChampionList />} />
          <Route path="/champion/:slug" element={<ChampionData />} />
          <Route path="/role/:slug" element={<RoleList />} />
          <Route path="/type/:slug" element={<TypeList />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
