import { Notification } from 'components';
import { IMG_URL } from 'constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

import default_vertical_poster_path from '../../styles/default_vertical_poster_path.jpg';
import { Image, InfoWrap, Item, List, Text, Title } from './Cast.style';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();
    const getMovieCastByMovieId = async () => {
      try {
        const response = await TMDB_API.getMovieCastByMovieId(
          movieId,
          controller
        );

        setCast(response);
        setError(false);
      } catch (error) {
        if (error.message === 'canceled') return;
        setError(error.message);
      }
    };
    getMovieCastByMovieId();

    return () => controller.abort();
  }, [movieId]);
  return (
    <>
      {cast && (
        <List>
          {cast?.map(({ profile_path, id, original_name, popularity }) => (
            <Item key={id}>
              <Image
                loading="lazy"
                width="250"
                height="375"
                src={
                  profile_path
                    ? `${IMG_URL}${profile_path}`
                    : default_vertical_poster_path
                }
                alt={original_name}
              />
              <InfoWrap>
                <Title>{original_name}</Title>
                <Text>Popularity: {popularity}</Text>
              </InfoWrap>
            </Item>
          ))}
        </List>
      )}
      {/* {cast &&
        cast.map(({ profile_path, id, original_name, popularity }) => (
          <div key={id}>
            <img src={`${IMG_URL}${profile_path}`} alt="" />
            <p>{original_name}</p>
            <p>{popularity}</p>
          </div>
        ))} */}
      <Notification>
        {!error && cast?.length === 0 && 'Sorry. There are no cast... 😭 '}
        {error && `❌ Something went wrong - ${error}`}
      </Notification>
    </>
  );
};

export default Cast;
