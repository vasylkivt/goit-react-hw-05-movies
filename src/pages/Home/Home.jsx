import { MovieList } from 'components';
import { useEffect, useState } from 'react';
import { TMDB_API } from 'services';

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
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
