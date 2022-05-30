import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { Trending } from 'view/Trending';
import { MoviesView } from 'view/MoviesView';
import { MovieDetails } from 'components/MovieDetails';
import { NotFound } from 'components/NotFound';
import { MovieCasts } from 'components/MovieCasts';

// import {
//   getTrendingMovies,
//   getSearchMovies,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews,
//   fetchImage,
// } from 'service/movieApi';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

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
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCasts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
};
