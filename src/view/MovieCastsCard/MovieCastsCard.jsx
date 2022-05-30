import userAnonim from 'image/user-anonim.jpeg';

import { Container } from 'components/Container';

const IMG_API = 'https://image.tmdb.org/t/p/w300/';
export const MovieCastsCard = ({ casts }) => {
  return (
    <Container>
      <ul>
        {casts.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              style={{
                width: 40,
              }}
              src={profile_path ? `${IMG_API}${profile_path}` : `${userAnonim}`}
              alt="actor"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
