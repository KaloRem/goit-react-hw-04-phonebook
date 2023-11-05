import styles from './SearchFilter.module.css';

export const SearchFilter = ({ filter, onHandleChange }) => {
  return (
    <>
      <label htmlFor="filter" className={styles.filterLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.filterInput}
        id="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </>
  );
};