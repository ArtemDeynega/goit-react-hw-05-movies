import {
  useParams,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useRef } from 'react';
import { MovieDetailsCard } from '../../view/MovieDetailsCard';
import { Container } from 'components/Container';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useRef(location);
  console.log(history);

  const { movieId } = useParams();

  const movie = useFetchMovieDetails();
  const onGoBack = () => {
    navigate(history?.current?.state?.from ?? '/');
  };

  return (
    <>
      <Container>
        <button type="button" onClick={onGoBack}>
          Go Back
        </button>
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
