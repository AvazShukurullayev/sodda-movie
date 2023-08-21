import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card my-2 text-center">
        <div className="card-header">
          <h4>{movie.name}</h4>
        </div>
        <div className="card-body">
          <img className="movie-img img-fluid" src={movie.imgURL} alt={movie.name} />
        </div>
        <div className="card-footer">
          <p>Liked: {movie.liked}</p>
          <p>Produced: {movie.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
