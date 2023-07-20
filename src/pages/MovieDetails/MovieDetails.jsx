import { Button, MovieDetailsItem, Notification } from 'components';
import styled from 'styled-components';
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
        <>
          <MovieDetailsItem movie={movie} />
          <BtnWrap>
            <Link to="cast">
              <Button>Cast</Button>
            </Link>
            <Link to="reviews">
              <Button>Reviews</Button>
            </Link>
          </BtnWrap>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {error && (
        <Notification>{`❌ Something went wrong - ${error}`}</Notification>
      )}
    </>
  );
};

export const BtnWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export default MovieDetails;
