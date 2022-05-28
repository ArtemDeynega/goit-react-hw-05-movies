import { useState, lazy } from 'react';

import { Routes, Route, useParams } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Trending } from 'components/view/Trending';
import { MoviesView } from 'components/view/MoviesView';

import {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  fetchImage,
} from 'service/movieApi';
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
          <Route path="movies" element={<MoviesView />}></Route>
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
