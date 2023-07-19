import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    const getMovieReviewsByMovieId = async () => {
      try {
        const response = await TMDB_API.getMovieReviewsByMovieId(
          movieId,
          controller
        );

        setReviews(response);
      } catch (error) {}
    };
    getMovieReviewsByMovieId();

    return () => controller.abort();
  }, [movieId]);
  return (
    <>
      {reviews && (
        <div>
          {reviews.map(({ author, content, id }) => {
            return (
              <div key={id}>
                <p>Author: {author}</p>
                <p>Desk:{content} </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Reviews;
