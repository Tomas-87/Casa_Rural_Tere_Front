import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "./Hamburger";

export default function Layout() {
  return (
    <>
      <Header />
      <Hamburger />
      <Outlet />
      <Footer />
    </>
  );
}
