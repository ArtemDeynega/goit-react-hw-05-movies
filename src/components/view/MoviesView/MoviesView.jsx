import { useState } from 'react';
import { SearchBar } from 'components/SearchBar';
import { Outlet } from 'react-router-dom';
export const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleQuery = newQuery => {
    if (searchQuery !== newQuery) {
      setSearchQuery(newQuery);
    }
  };
  console.log(searchQuery);
  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      <Outlet />
    </>
  );
};
