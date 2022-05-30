import { toast } from 'react-toastify';
import { getTrendingMovies } from 'service/movieApi';
import { TrendingTitle } from '.';

import { useState, useEffect } from 'react';
import { MovieCard } from 'view/MovieCard';

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const sendTrendingMovies = await getTrendingMovies();
        setTrendingMovies(sendTrendingMovies);
        return;
      } catch (error) {
        console.log(error);
        toast.error(`Что то пошло не так 😕`);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <TrendingTitle>Trending today</TrendingTitle>
      {trendingMovies && <MovieCard movies={trendingMovies} />}
    </>
  );
};
