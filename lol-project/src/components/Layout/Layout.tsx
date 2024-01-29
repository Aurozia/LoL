import { Outlet } from "react-router";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
