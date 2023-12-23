import React from 'react';
import css from '../Filter/Filter.module.css';

export const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <>
      <p className={css.filterTitle}>Find contacts by name:</p>
      <label className={css.label}>
        <input
          className={css.filterInput}
          value={filter}
          onChange={handleChangeFilter}
          type="text"
          name="keyword"
          placeholder="John..."
        />
      </label>
    </>
  );
};
