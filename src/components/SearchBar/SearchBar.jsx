import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Input, SearchForm, SearchIcon } from './SearchBar.style';

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
      <SearchForm onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={query}
          type="text"
          name="searchValue"
          autoComplete="off"
          placeholder="Search movies "
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </SearchForm>
    </div>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
