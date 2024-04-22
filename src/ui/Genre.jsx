import styles from './Genre.module.css';

function Genre({ genre = '' }) {
  const genreArr = genre.split(',');

  return (
    <div className={styles.genreWrap}>
      {genreArr.map(genre => (
        <span className={styles.genre} key={genre}>
          {genre}
        </span>
      ))}
    </div>
  );
}

export default Genre;
