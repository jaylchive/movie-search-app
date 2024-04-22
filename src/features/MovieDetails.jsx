import styles from './MovieDetails.module.css';

function MovieDetails({ label, value, votes }) {
  return (
    <li className={styles.detail}>
      <span className={styles.label}>{label}: </span>
      <span className={styles.value}>{value}</span>
      {votes && <span className={styles.votes}>({votes} votes)</span>}
    </li>
  );
}

export default MovieDetails;
