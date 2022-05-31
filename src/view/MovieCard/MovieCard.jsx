import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ListItem, Img, Title } from '.';

export const MovieCard = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Title>{title}</Title>
              <Img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt="poster film"
              />
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
MovieCard.propTypes = {
  movies: PropTypes.array.isRequired,
};
