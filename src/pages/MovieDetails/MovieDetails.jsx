import { Button, MovieDetailsItem, Notification } from 'components';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    const getMovieByMovieId = async () => {
      try {
        const response = await TMDB_API.getMovieByMovieId(movieId, controller);

        setMovie(response);
        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;

        setError(error.message);
      }
    };
    getMovieByMovieId();

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <Button $marginBottom={'20px'}>Back</Button>
      </Link>
      {movie && (
        <div>
          <MovieDetailsItem movie={movie} />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {error && (
        <Notification>{`❌ Something went wrong - ${error}`}</Notification>
      )}
    </>
  );
};

export default MovieDetails;
