import { MovieItem } from 'components';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

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
          <MovieItem movie={movie} />
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
