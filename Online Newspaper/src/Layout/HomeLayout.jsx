import Header from "../Components/Header";
import Latest from "../Components/Latest";
import LeftComponents from "../Components/LeftComponents";
import NavBar from "../Components/NavBar";
import RightComponents from "../Components/RightComponents";
const HomeLayout = () => {
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
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-4">
        <aside className="left col-span-3">
          {" "}
          <LeftComponents />
        </aside>
        <section className="col-span-6">Main Contents</section>
        <aside className=" col-span-3">
          {" "}
          <RightComponents />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
