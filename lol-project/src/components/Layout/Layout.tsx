import { Outlet } from "react-router";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionList from "../ChampionList.tsx";
import ChampionData from "../ChampionData.tsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <ChampionData />
      </main>
      <Footer />
    </>
  );
}
