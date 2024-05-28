import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav className="container">
        <h2>This is navbar</h2>
      </nav>
      <section className="container grid grid-cols-12 ">
        <div className="col-span-3 bg-red-300">
          <h1>left side</h1>
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
        <div className="col-span-3 bg-green-200">
          <h1>Side bar</h1>
        </div>
      </section>
      <footer className="container">
        <h2> this is footer</h2>
      </footer>
    </>
  );
};

export default MainLayout;
