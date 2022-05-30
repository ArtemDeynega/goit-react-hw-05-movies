import { Container } from 'components/Container';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';

import { MovieReviewsCard } from 'view/MovieReviewsCard';
export const MovieReviews = () => {
  const reviews = useFetchMovieReviews();
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
