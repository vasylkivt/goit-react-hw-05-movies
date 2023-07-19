import { MovieList } from 'components';
import { useEffect, useState } from 'react';
import { TMDB_API } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingAllDay = async () => {
      const response = await TMDB_API.getTrendMovieByParam('day');

      setMovies(response);
    };
    getTrendingAllDay();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
