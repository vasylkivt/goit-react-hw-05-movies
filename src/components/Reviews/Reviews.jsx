import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();

  useEffect(() => {
    if (!movieId) return;

    const getMovieReviewsByMovieId = async () => {
      const response = await TMDB_API.getMovieReviewsByMovieId(movieId);

      setReviews(response);
    };
    getMovieReviewsByMovieId();
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
