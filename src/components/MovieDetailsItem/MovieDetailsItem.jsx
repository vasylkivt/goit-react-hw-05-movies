import default_horizontal_poster_path from '../../styles/default_horizontal_poster_path.jpg';
import PropTypes from 'prop-types';

import {
  Description,
  Image,
  InfoItem,
  InfoList,
  InfoWrap,
  MovieWrap,
  Name,
  Title,
} from './MovieDetailsItem.style';
import { IMG_URL } from 'constants';
import { formatDate } from 'helpers';

export const MovieDetailsItem = ({
  movie: {
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  },
}) => {
  const allGenres = genres.map(({ name }) => name).join(', ');
  return (
    <MovieWrap>
      <Image
        loading="lazy"
        width="850"
        height="400"
        src={
          backdrop_path
            ? `${IMG_URL}w1280${backdrop_path}`
            : default_horizontal_poster_path
        }
        alt={original_title}
      />
      <div>
        <Title>{original_title}</Title>
        <InfoWrap>
          <InfoList>
            <InfoItem>
              <Name>Release date</Name> {formatDate(release_date)}
            </InfoItem>
            <InfoItem>
              <Name>Vote / Votes</Name> {vote_average} / {vote_count}
            </InfoItem>

            <InfoItem>
              <Name>Popularity</Name> {popularity}
            </InfoItem>
            <InfoItem>
              <Name>Genre</Name> {allGenres}
            </InfoItem>
          </InfoList>
        </InfoWrap>

        <Description>
          <Name>About</Name>
          {overview}
        </Description>
      </div>
    </MovieWrap>
  );
};
MovieDetailsItem.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
