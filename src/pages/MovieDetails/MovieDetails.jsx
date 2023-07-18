import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovieByMovieId = async () => {
      const response = await TMDB_API.getMovieByMovieId(movieId);

      setMovie(response);
    };
    getMovieByMovieId();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <Link to={backLink}>Back to </Link>
          <div>
            <img src={`${IMG_URL}${movie.poster_path}`} alt="" />

            <p>{movie.title}</p>
            <p>{movie.id}</p>
            {/* <p>{movie.genres}</p> */}
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count}</p>
            <p>{movie.status}</p>
            <p>{movie.release_date}</p>
            <p>{movie.popularity}</p>
            <p>{movie.homepage}</p>
            <p>{movie.overview}</p>
          </div>
          <Link to={'cast'}>Cast</Link>
          <Link to={'reviews'}>Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
};
