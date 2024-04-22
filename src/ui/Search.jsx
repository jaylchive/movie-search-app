import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.css';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/${query}`);
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <img src="/icon-search.svg" />
      <input
        type="text"
        value={query}
        placeholder="Search movie"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
