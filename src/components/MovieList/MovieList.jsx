import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem } from 'components';
import { Item, List } from './MovieList.style';
import { forwardRef } from 'react';

export const MovieList = forwardRef(({ movies }, ref) => {
  const location = useLocation();

  return (
    <List ref={ref}>
      {movies?.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </Link>
        </Item>
      ))}
    </List>
  );
});

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
