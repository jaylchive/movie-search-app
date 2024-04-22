import styles from './MovieItem.module.css';

function MovieItem({ movie }) {
  console.log(movie);
  const { Title: title } = movie;

  return <li></li>;
}

export default MovieItem;
