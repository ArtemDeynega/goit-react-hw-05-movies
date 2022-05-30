import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { SearchBar } from 'components/SearchBar';
import { Outlet } from 'react-router-dom';
import { getSearchMovies } from 'service/movieApi';
import { MovieCard } from 'view/MovieCard';

const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [, setError] = useState(null);
  const handleQuery = newQuery => {
    if (searchQuery !== newQuery) {
      setSearchQuery(newQuery);
    }
  };
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        await getSearchMovies(searchQuery).then(data => {
          if (data.length === 0) {
            toast.warn(`По вашему запросу ${searchQuery} не чего не найден 😔`);
          }
          if (data.length > 0) {
            setMovies([...data]);
          }
        });
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchMovies();
    setMovies(null);
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleQuery} />

      {movies && <MovieCard movies={movies} />}
      <Outlet />
    </>
  );
};
export default MoviesView;
