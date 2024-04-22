import { useMovie } from '../services/useMovie';
import Genre from '../ui/Genre';
import MovieDetails from './MovieDetails';
import styles from './Movie.module.css';

function Movie() {
  const { movie, isLoading } = useMovie();

  if (isLoading) return null;

  if (movie.Error) return <h1 className={styles.notFound}>Movie not found</h1>;

  const {
    Poster: poster,
    Title: title,
    Genre: genre,
    Plot: plot,
    Director: director,
    Writer: writer,
    Actors: actors,
    imdbRating,
    imdbVotes,
  } = movie;

  console.log(movie);

  return (
    <div className={styles.movie}>
      <img className={styles.poster} src={poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <Genre genre={genre} />
        <p className={styles.plot}>{plot}</p>
        <ul className={styles.detailList}>
          <MovieDetails label="Director" value={director} />
          <MovieDetails label="Writers" value={writer} />
          <MovieDetails label="Stars" value={actors} />
          <MovieDetails
            label="IMDb Rating"
            value={imdbRating}
            votes={imdbVotes}
          />
        </ul>
      </div>
    </div>
  );
}

export default Movie;
