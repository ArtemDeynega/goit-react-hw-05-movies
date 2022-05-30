import { getTrendingMovies } from 'service/movieApi';

import { TrendingTitle } from '.';
import { Loader } from 'components/Loader';

import { useState, useEffect } from 'react';
import { MovieCard } from 'view/MovieCard';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const sendTrendingMovies = await getTrendingMovies();
        setTrendingMovies(sendTrendingMovies);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <TrendingTitle>Trending today</TrendingTitle>
      {!trendingMovies && <Loader />}

      {trendingMovies && <MovieCard movies={trendingMovies} />}
    </>
  );
};
export default Trending;
