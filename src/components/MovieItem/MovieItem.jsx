import { DateText, Image, InfoWrap, Title } from './MovieItem.style';
import { formatDate } from 'helpers';
const IMG_URL = 'https://image.tmdb.org/t/p/original/';

export const MovieItem = ({
  movie: { original_title, release_date, poster_path },
}) => {
  return (
    <>
      <Image
        loading="lazy"
        width="250"
        height="375"
        src={`${IMG_URL}${poster_path}`}
        alt={original_title}
      />
      <InfoWrap>
        <Title>{original_title}</Title>
        <DateText>{formatDate(release_date)}</DateText>
      </InfoWrap>
    </>
  );
};
