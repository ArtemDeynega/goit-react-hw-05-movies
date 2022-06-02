import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { NotFound } from 'components/NotFound';

import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

const HomePageLazy = lazy(() =>
  import('components/Layout' /* webpackChunkName: "home-page-lazy" */)
);
const TrendingLazy = lazy(() =>
  import('components/Trending' /* webpackChunkName: "trending-lazy" */)
);
const MoviesViewLazy = lazy(() =>
  import('components/MoviesView' /* webpackChunkName: "movies-view-lazy" */)
);
const MovieDetailsLazy = lazy(() =>
  import('components/MovieDetails' /* webpackChunkName: "movie-details-lazy" */)
);

const MovieCastsLazy = lazy(() =>
  import('components/MovieCasts' /* webpackChunkName: "movie-casts-lazy" */)
);

const MovieReviewsLazy = lazy(() =>
  import('components/MovieReviews' /* webpackChunkName: "movie-reviews-lazy" */)
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePageLazy />}>
            <Route index element={<TrendingLazy />} />
            <Route path="movies" element={<MoviesViewLazy />} />
            <Route path="movies/:movieId" element={<MovieDetailsLazy />}>
              <Route path="cast" element={<MovieCastsLazy />} />
              <Route path="reviews" element={<MovieReviewsLazy />} />
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
