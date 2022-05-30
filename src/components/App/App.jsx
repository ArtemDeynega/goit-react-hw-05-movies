import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { NotFound } from 'components/NotFound';
import { MovieCasts } from 'components/MovieCasts';
import { MovieReviews } from 'components/MovieReviews';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

const HomaPageLazy = lazy(() => import('components/Layout'));
const TrendingLazy = lazy(() => import('components/Trending'));
const MoviesViewLazy = lazy(() => import('components/MoviesView'));
const MovieDetailsLazy = lazy(() => import('components/MovieDetails'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomaPageLazy />}>
            <Route index element={<TrendingLazy />} />
            <Route path="movies" element={<MoviesViewLazy />} />
            <Route path="movies/:movieId" element={<MovieDetailsLazy />}>
              <Route path="cast" element={<MovieCasts />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
};
