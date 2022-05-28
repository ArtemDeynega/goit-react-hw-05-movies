import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { Trending } from 'components/view/Trending';
// import {
//   getTrendingMovies,
//   getSearchMovies,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews,
//   fetchImage,
// } from 'service/movieApi';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
// import { MoviesView } from 'components/view/MoviesView';

const MoviesView = lazy(
  () =>
    import(
      'components/view/MoviesView/MoviesView.jsx'
    ) /* webpackChunkName: "movies-view" */
);

// /trending
// /search
// /movies
// /:details
// /:credits
// /:reviews

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<MoviesView />}></Route>
        </Route>
      </Routes>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
};
