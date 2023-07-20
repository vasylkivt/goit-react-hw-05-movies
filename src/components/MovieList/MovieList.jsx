import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem } from 'components';
import { Item, List } from './MovieList.style';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies?.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </Link>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
