import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movieApi';
export const useFetchMovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [, setError] = useState(null);
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        await getMovieReviews(movieId).then(response => {
          if (response.length === 0) {
            return;
          }
          if (response.length > 0) {
            setReviews(response);
          }
        });
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);
  return reviews;
};
