import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} type="text" />
        <button style={{ backgroundColor: '#00000040' }} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
