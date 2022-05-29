const axios = require('axios').default;

const SET_URL = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: '6ec0852e53b9bedf7516e9964c7fa3f3',
  HOME: 'trending',
  PATH: 'movie',
  SEARCH: 'search',
};

const getMovie = axios.create({
  baseURL: SET_URL.BASE_URL,
  params: {
    api_key: SET_URL.KEY,
    language: 'en-US',
  },
});

export const fetchImage = filePath => {
  return `https://image.tmdb.org/t/p/w300/${filePath}`;
};
export const getTrendingMovies = async () => {
  const { data } = await getMovie(`${SET_URL.HOME}/${SET_URL.PATH}/day?`);

  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await getMovie(
    `${SET_URL.SEARCH}/${SET_URL.PATH}?include_adult=false&query=${query}`
  );

  return data.results;
};
export const getMovieDetails = async movieId => {
  const { data } = await getMovie(`${SET_URL.PATH}/${movieId}`);

  return data;
};
export const getMovieCredits = async movieId => {
  const { data } = await getMovie(`${SET_URL.PATH}/${movieId}/credits`);
  //   console.log(data.cast);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await getMovie(`${SET_URL.PATH}/${movieId}/reviews?page=1`);
  //   console.log(data.results);
  return data.results;
};
