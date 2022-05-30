import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movieApi';

export const useFetchMovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        await getMovieDetails(movieId).then(response => {
          return setMovie(response);
        });
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  return movie;
};
