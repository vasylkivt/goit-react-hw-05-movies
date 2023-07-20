import { MovieList, SearchBar } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TMDB_API } from 'services';
import styled from 'styled-components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
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
      } catch (error) {}
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
      } catch (error) {}
    };
    searchMovieByQuery();

    return () => controller.abort();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Title>
        {query ? `Movies by result '${query}'` : "In this week's trend"}
      </Title>
      <MovieList movies={movies} />
    </>
  );
};

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 25px;
`;

export default Movies;