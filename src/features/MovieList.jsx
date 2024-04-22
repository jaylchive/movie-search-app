import { useMovie } from '../services/useMovie';
import MovieItem from './MovieItem';
import styles from './MovieList.module.css';

function MovieList() {
  const { movies, isLoading } = useMovie();

  if (isLoading) return null;

  console.log(movies);

  return (
    <ul className={styles['movie-list']}>
      {/* {movies?.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))} */}
    </ul>
  );
}

export default MovieList;
