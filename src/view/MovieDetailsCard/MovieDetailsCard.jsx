import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import {
  MovieImg,
  DetailsContainer,
  DetailsListItem,
  TitleDetails,
} from './MovieDetailsCard.styled';
const IMG_API = 'https://image.tmdb.org/t/p/w300';
export const MovieDetailsCard = ({ movie }) => {
  const { backdrop_path, original_title, overview, genres } = movie;

  return (
    <Container>
      <h2>{original_title}</h2>
      <MovieImg
        src={`${IMG_API}/${backdrop_path}`}
        alt={`poster ${original_title}`}
      />
      <DetailsContainer>
        <TitleDetails>Overview</TitleDetails>
        <p>{overview}</p>
      </DetailsContainer>
      <DetailsContainer>
        <TitleDetails>Genres</TitleDetails>
        <ul>
          {genres.map(({ id, name }) => (
            <DetailsListItem key={id}>{name}</DetailsListItem>
          ))}
        </ul>
      </DetailsContainer>
    </Container>
  );
};
MovieDetailsCard.movie = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
