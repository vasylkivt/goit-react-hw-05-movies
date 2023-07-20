import { MovieList } from 'components';
import { useEffect, useState } from 'react';
import { TMDB_API } from 'services';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getTrendingAllDay = async () => {
      try {
        const response = await TMDB_API.getTrendMovieByParam('day', controller);

        setMovies(response);
      } catch (error) {}
    };
    getTrendingAllDay();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Title>In trend Today</Title>
      <MovieList movies={movies} />
    </>
  );
};

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 25px;
`;

export default Home;
