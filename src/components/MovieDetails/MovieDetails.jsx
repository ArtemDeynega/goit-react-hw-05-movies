import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { MovieDetailsCard } from '../../view/MovieDetailsCard';
import { Container } from 'components/Container';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const movie = useFetchMovieDetails();

  return (
    <>
      <Container>
        {movie && <MovieDetailsCard movie={movie} />}
        <Link to={`/movies/${movieId}/cast`}>
          <h3>Casts</h3>
        </Link>
        <Link to={`/movies/${movieId}/reviews`}>
          <h3>Reviews</h3>
        </Link>
      </Container>
      <Outlet />
    </>
  );
};
export default MovieDetails;
