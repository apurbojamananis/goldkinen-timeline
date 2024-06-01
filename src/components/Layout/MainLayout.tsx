import { Outlet } from "react-router-dom";

import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <section className="container grid grid-cols-12 gap-2 relative">
        <div
          className="col-span-3 bg-white max-h-screen overflow-y-auto"
          style={{ position: "sticky", top: "0" }}
        >
          <LeftSidebar />
        </div>
        <div className="col-span-6 bg-white">
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            theme="colored"
            transition={Slide}
          />
        </div>
        <div
          className="col-span-3 bg-white max-h-screen overflow-y-auto"
          style={{ position: "sticky", top: "0" }}
        >
          <RightSidebar />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
