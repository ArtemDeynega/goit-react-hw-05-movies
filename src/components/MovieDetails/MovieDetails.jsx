import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'service/movieApi';
import { MovieDetailsCard } from '../../view/MovieDetailsCard';

export const MovieDetails = () => {
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

  return <>{movie && <MovieDetailsCard movie={movie} />}</>;
};
