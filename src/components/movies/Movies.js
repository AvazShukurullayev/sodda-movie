import MovieCard from "../movieCard/MovieCard";
import moviesApi from "../../services/moviesApi";

const Movies = () => {
  return (
    <div className="movies">
      <div className="container">
        <div className="row">
          {moviesApi.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
