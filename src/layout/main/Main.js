import Movies from "../../components/movies/Movies";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="movies-section">
        <h1 className="text-center my-4">Movies</h1>
        <Movies />
      </section>
    </main>
  );
};

export default Main;
