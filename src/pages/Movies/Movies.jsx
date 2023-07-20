import { MovieList, Notification, SearchBar } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query) return;
    const controller = new AbortController();

    const getTrendMovieByParam = async () => {
      try {
        const response = await TMDB_API.getTrendMovieByParam(
          'week',
          controller
        );
        setMovies(response);

        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
      }
    };
    getTrendMovieByParam();
    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();

    const searchMovieByQuery = async () => {
      try {
        const response = await TMDB_API.searchMovieByQuery(query, controller);

        setMovies(response);
        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
      }
    };
    searchMovieByQuery();

    return () => controller.abort();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {!error && !query && (
        <Notification $marginBottom={'25px'}>In this week's trend</Notification>
      )}
      {!error && query && movies?.length !== 0 && (
        <Notification $marginBottom={'25px'}>
          {`Movies by result '${query}'`}
        </Notification>
      )}
      <Notification $marginBottom={'25px'}>
        {!error &&
          movies?.length === 0 &&
          query &&
          `Sorry. There are no movies by result '${query}' ... 😭  `}
      </Notification>
      {error && (
        <Notification> {`❌ Something went wrong - ${error}`}</Notification>
      )}
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
