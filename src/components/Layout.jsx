import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import ScrollTop from "./ScrollTop";

export default function Layout() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Hamburger />
      <Outlet />
      <Footer />
    </>
  );
}
