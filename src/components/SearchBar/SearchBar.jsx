import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChenge = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e, query)}>
        <input onChange={handleChenge} value={query} type="text" />
        <button style={{ backgroundColor: '#00000040' }} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
