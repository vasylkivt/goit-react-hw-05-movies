import { IMG_URL } from 'constants';
import { DateText, Image, InfoWrap, Title } from './MovieItem.style';
import { formatDate } from 'helpers';
import default_vertical_poster_path from '../../styles/default_vertical_poster_path.jpg';

export const MovieItem = ({
  movie: { original_title, release_date, poster_path },
}) => {
  return (
    <>
      <Image
        loading="lazy"
        width="250"
        height="375"
        src={
          poster_path
            ? `${IMG_URL}${poster_path}`
            : default_vertical_poster_path
        }
        alt={original_title}
      />
      <InfoWrap>
        <Title>{original_title}</Title>
        <DateText>{formatDate(release_date)}</DateText>
      </InfoWrap>
    </>
  );
};
