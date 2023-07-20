import { Notification } from 'components';
import { IMG_URL } from 'constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';
import default_vertical_poster_path from '../../styles/default_vertical_poster_path.jpg';
import { formatDate } from 'helpers';
import {
  Comment,
  CommentWrap,
  Date,
  Image,
  Item,
  List,
  Name,
  Rating,
  TextWrap,
  UserInfo,
} from './Reviews.style';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();
  const [error, setError] = useState(false);

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
        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
      }
    };
    getMovieReviewsByMovieId();

    return () => controller.abort();
  }, [movieId]);
  return (
    <>
      {reviews && (
        <List>
          {reviews.map(
            ({
              content,
              id,
              updated_at,
              author_details: { rating, name, avatar_path },
            }) => {
              const imgUrl = avatar_path?.includes('https')
                ? default_vertical_poster_path
                : avatar_path
                ? `${IMG_URL}${avatar_path}`
                : default_vertical_poster_path;

              return (
                <Item key={id}>
                  <UserInfo>
                    <Image src={imgUrl} alt="" />
                    <TextWrap>
                      <Name>Author: {name}</Name>
                      <Rating>Rating: {rating}</Rating>
                    </TextWrap>
                  </UserInfo>

                  <CommentWrap>
                    <Comment>{content} </Comment>
                    <Date>{formatDate(updated_at)}</Date>
                  </CommentWrap>
                </Item>
              );
            }
          )}
        </List>
      )}

      <Notification>
        {!error &&
          reviews?.length === 0 &&
          'Sorry. There are no reviews... 😭. You can view the cast 😎. '}
        {error && `❌ Something went wrong - ${error}`}
      </Notification>
    </>
  );
};

export default Reviews;
