import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { SearchBar } from 'components/SearchBar';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'service/movieApi';
import { MovieCard } from 'view/MovieCard';

const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

  const getSearchParams = searchParams.get('query') || '';

  const handleQuery = newQuery => {
    if (searchQuery !== newQuery) {
      setSearchQuery(newQuery);
      setSearchParams({ query: newQuery });
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
  useEffect(() => {
    if (!getSearchParams) {
      return;
    }
    const fetchMovies = async () => {
      try {
        await getSearchMovies(getSearchParams).then(data => {
          setMovies([...data]);
        });
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
    };
    fetchMovies();
    setMovies(null);
  }, [getSearchParams]);

  return (
    <>
      <SearchBar onSubmit={handleQuery} />

      {movies && <MovieCard movies={movies} />}
      <Outlet />
    </>
  );
};
export default MoviesView;
