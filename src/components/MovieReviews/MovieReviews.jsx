import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container';

import { getMovieReviews } from 'service/movieApi';
import { MovieReviewsCard } from 'view/MovieReviewsCard';
export const MovieReviews = () => {
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
  console.log(`Ето перед рендером: `, reviews);
  return (
    <Container>
      {reviews ? (
        <MovieReviewsCard reviews={reviews} />
      ) : (
        <p>Отзывов еще нет :(</p>
      )}
    </Container>
  );
};
