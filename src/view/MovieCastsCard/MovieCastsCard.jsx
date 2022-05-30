import userAnonim from 'image/user-anonim.jpeg';

import { Container } from 'components/Container';
import { Img, Text, ListItem, Item } from './MovieCastsCard.styled';

const IMG_API = 'https://image.tmdb.org/t/p/w300/';
export const MovieCastsCard = ({ casts }) => {
  return (
    <Container>
      <Item>
        {casts.map(({ id, name, profile_path }) => (
          <ListItem key={id}>
            <Img
              src={profile_path ? `${IMG_API}${profile_path}` : `${userAnonim}`}
              alt="actor"
            />
            <Text>{name}</Text>
          </ListItem>
        ))}
      </Item>
    </Container>
  );
};
