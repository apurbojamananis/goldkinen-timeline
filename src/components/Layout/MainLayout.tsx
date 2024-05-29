import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";

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
        <div className="col-span-6 ">
          <Outlet />
          <Toaster />
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
