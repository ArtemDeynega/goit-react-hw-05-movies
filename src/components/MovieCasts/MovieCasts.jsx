import { useFetchMovieCast } from 'hooks/useFetchMovieCast';

import { MovieCastsCard } from 'view/MovieCastsCard';

const MovieCasts = () => {
  const casts = useFetchMovieCast();

  return <>{casts && <MovieCastsCard casts={casts} />}</>;
};
export default MovieCasts;
