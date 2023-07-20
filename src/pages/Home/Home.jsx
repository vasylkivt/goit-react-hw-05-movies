import { Button, MovieList, Notification } from 'components';
import { useEffect, useState } from 'react';
import { TMDB_API } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getTrendingAllDay = async () => {
      try {
        const response = await TMDB_API.getTrendMovieByParam('day', controller);

        setMovies(response);
        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
      }
    };
    getTrendingAllDay();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Notification $marginBottom={'25px'}>
        {!error && 'In trend Today'}
        {error && `❌ Something went wrong - ${error}`}
      </Notification>
      <MovieList movies={movies} />
      <Button $marginLeft={'auto'}>{'Load More'}</Button>
    </>
  );
};

export default Home;
