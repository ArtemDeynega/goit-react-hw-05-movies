import { toast } from 'react-toastify';
import { getTrendingMovies } from 'service/movieApi';

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
      <h1>Trending today</h1>
      {trendingMovies && <MovieCard movies={trendingMovies} />}
    </>
  );
};
