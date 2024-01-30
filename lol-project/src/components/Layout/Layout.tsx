import { Outlet } from "react-router";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionList from "../ChampionList.tsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <ChampionList />
      </main>
      <Footer />
    </>
  );
}
