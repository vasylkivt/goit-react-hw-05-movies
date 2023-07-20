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

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

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
        width="704"
        height="400"
        src={`${IMG_URL}${backdrop_path}`}
        alt={original_title}
      />
      <div>
        <Title>{original_title}</Title>
        <InfoWrap>
          <InfoList>
            <InfoItem>
              <Name>Release date</Name> {release_date}
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
