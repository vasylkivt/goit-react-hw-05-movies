import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    const getMovieByMovieId = async () => {
      try {
        const response = await TMDB_API.getMovieByMovieId(movieId, controller);

        setMovie(response);
      } catch (error) {}
    };
    getMovieByMovieId();

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <Link to={backLinkLocationRef.current}>Back to </Link>
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
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
