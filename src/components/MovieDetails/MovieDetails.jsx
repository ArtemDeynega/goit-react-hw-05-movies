import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'service/movieApi';
import { MovieDetailsCard } from '../../view/MovieDetailsCard';
import { Container } from 'components/Container';

export const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [filmId, ,] = useState(movieId);
  const [movie, setMovie] = useState(null);
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        await getMovieDetails(filmId).then(response => {
          return setMovie(response);
        });
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [filmId, movieId]);

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
