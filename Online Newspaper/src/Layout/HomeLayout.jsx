import Header from "../Components/Header";
import Latest from "../Components/Latest";
const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <Latest />
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
