import { useFetchMovieCast } from 'hooks/useFetchMovieCast';

import { MovieCastsCard } from 'view/MovieCastsCard';

export const MovieCasts = () => {
  const casts = useFetchMovieCast();

  return <>{casts && <MovieCastsCard casts={casts} />}</>;
};
