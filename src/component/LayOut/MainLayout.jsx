import { Outlet } from "react-router-dom";
import Navber from "../Navbar/Navber";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";


const MainLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navber></Navber>
      <div>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>

      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;