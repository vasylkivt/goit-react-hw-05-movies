import { MovieList, SearchBar } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TMDB_API } from 'services';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  console.log('movieName:', movieName);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSearchParams({ query: value });
    setQuery(value);
  };

  useEffect(() => {
    const getTrendMovieByParam = async () => {
      const response = await TMDB_API.getTrendMovieByParam('week');

      setMovies(response);
    };
    getTrendMovieByParam();
  }, []);

  useEffect(() => {
    if (!query) return;
    const searchMovieByQuery = async () => {
      const response = await TMDB_API.searchMovieByQuery(query);

      setMovies(response);
    };
    searchMovieByQuery();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};
