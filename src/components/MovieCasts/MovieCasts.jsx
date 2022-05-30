import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/movieApi';
import { MovieCastsCard } from 'view/MovieCastsCard';

export const MovieCasts = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState(null);
  const [, setError] = useState(null);
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        await getMovieCredits(movieId).then(response => setCasts(response));
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return <>{casts && <MovieCastsCard casts={casts} />}</>;
};
