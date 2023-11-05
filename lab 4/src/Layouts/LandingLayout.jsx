import Footer from "../components/footer";
import Header from "../components/head";
import { Outlet } from "react-router-dom";
function LandingLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandingLayout;