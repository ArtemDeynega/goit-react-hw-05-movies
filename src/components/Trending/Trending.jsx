import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { TrendingTitle } from '.';
import { Loader } from 'components/Loader';

import { MovieCard } from 'view/MovieCard';

const Trending = () => {
  const trendingMovies = useFetchTrendingMovies();
  return (
    <>
      <TrendingTitle>Trending today</TrendingTitle>
      {!trendingMovies && <Loader />}

      {trendingMovies && <MovieCard movies={trendingMovies} />}
    </>
  );
};
export default Trending;
