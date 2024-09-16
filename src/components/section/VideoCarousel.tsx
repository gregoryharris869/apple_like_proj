import { movies, randomMoviesSet1 } from "../../movies";

const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div>
        <div>
          <img src={movies[0].poster} alt={movies[0].name} />
        </div>
        <div>
          <img src={movies[1].poster} alt={movies[1].name} />
        </div>
        <div>
          <img src={movies[2].poster} alt={movies[2].name} />
        </div>
      </div>
      <div>
        {randomMoviesSet1.map((movie, index) => (
          <img
            src={movie.poster}
            alt={movie.name}
            key={`${movie.name}-${index}`}
          />
        ))}
      </div>
      <div>carousel</div>
    </div>
  );
};

export default VideoCarousel;
