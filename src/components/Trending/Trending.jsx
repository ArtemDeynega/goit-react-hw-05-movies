import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { TrendingTitle } from '.';

import { MovieCard } from 'view/MovieCard';

const Trending = () => {
  const trendingMovies = useFetchTrendingMovies();
  return (
    <>
      <TrendingTitle>Trending today</TrendingTitle>

      {trendingMovies && <MovieCard movies={trendingMovies} />}
    </>
  );
};
export default Trending;
