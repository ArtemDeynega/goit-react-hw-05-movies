import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'service/movieApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmId, setFilmId] = useState('');
  const [movie, setMovie] = useState(null);
  const [, setError] = useState(null);
  useEffect(() => {
    setFilmId(movieId);
    const fetchMovieDetails = async () => {
      try {
        await getMovieDetails(filmId).then(response => {
          return setMovie(response);
        });
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchMovieDetails();
  }, [filmId, movieId]);
  console.log(filmId);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid
        laboriosam optio perferendis animi obcaecati itaque dolores molestiae
        perspiciatis dignissimos non, eum recusandae eligendi. Ipsum culpa
        commodi dolorem consequatur quibusdam?
      </p>
    </>
  );
};
