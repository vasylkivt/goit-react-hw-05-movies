import { MovieList, Notification, SkeletonMovie } from 'components';

import { useEffect, useState } from 'react';
import { TMDB_API } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getTrendingAllDay = async () => {
      setIsLoading(true);
      try {
        const response = await TMDB_API.getTrendMovieByParam('day', controller);

        setMovies(response);
        setError(false);
        setIsLoading(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
        setIsLoading(false);
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
      {!isLoading && <MovieList movies={movies} />}
      {isLoading && <SkeletonMovie />}
    </>
  );
};

export default Home;
