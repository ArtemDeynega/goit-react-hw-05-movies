import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/movieApi';
export const useFetchTrendingMovies = () => {
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
  return trendingMovies;
};
