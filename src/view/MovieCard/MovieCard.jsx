import { useNavigate, Link } from 'react-router-dom';
import { ListItem, Img, Title } from '.';

export const MovieCard = ({ movies }) => {
  let navigate = useNavigate();

  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`}>
              <Title>{title}</Title>
              <Img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt="poster film"
              />
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
