import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { Trending } from 'view/Trending';
import { MoviesView } from 'view/MoviesView';
import { MovieDetails } from 'view/MovieDetails';
import { NotFound } from 'components/NotFound';
import { getMovieDetails } from 'service/movieApi';

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
  // const data = getMovieDetails('361743');
  // console.log(data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
};
