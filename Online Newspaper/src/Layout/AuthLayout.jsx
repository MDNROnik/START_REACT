import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import NavBar from "../Components/NavBar";
const AuthLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <Latest />
        </section>
        <nav className="w-11/12 mx-auto">
          <NavBar />
        </nav>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
