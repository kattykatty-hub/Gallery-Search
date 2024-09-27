import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
