import { Container } from 'components/Container';
const IMG_API = 'https://image.tmdb.org/t/p/w300';
export const MovieDetailsCard = ({ movie }) => {
  const { backdrop_path, original_title, overview, genres } = movie;

  return (
    <Container>
      <h2>{original_title}</h2>
      <img
        src={`${IMG_API}/${backdrop_path}`}
        alt={`poster ${original_title}`}
        style={{
          width: 500,
        }}
      />
      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
