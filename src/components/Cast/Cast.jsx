import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API } from 'services';

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState();

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
      } catch (error) {}
    };
    getMovieCastByMovieId();

    return () => controller.abort();
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
