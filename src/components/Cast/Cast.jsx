import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState();
  console.log('movieId:', movieId);
  useEffect(() => {
    if (!movieId) return;

    const getMovieCastByMovieId = async () => {
      const response = await TMDB_API.getMovieCastByMovieId(movieId);

      setCast(response);
    };
    getMovieCastByMovieId();
  }, [movieId]);
  return (
    <div>
      {cast &&
        cast.map(({ profile_path, id, original_name, popularity }) => (
          <div key={id}>
            {' '}
            <img src={`${IMG_URL}${profile_path}`} alt="" />
            <p>{original_name}</p>
            <p>{popularity}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
