import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = () => {
  return (
    <>
      <section className="container grid grid-cols-12 relative">
        <div
          className="col-span-3 bg-red-300 max-h-screen"
          style={{ position: "sticky", top: "0" }}
        >
          <h1>left side</h1>
        </div>
        <div className="col-span-6">
          <Outlet />
          <Toaster />
        </div>
        <div
          className="col-span-3 bg-green-200 max-h-screen"
          style={{ position: "sticky", top: "0" }}
        >
          <h1>Side bar</h1>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
