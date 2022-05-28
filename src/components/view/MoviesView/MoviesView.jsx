import { Outlet } from 'react-router-dom';
export const MoviesView = () => {
  return (
    <>
      <h1>Movies</h1>
      <Outlet />
    </>
  );
};
