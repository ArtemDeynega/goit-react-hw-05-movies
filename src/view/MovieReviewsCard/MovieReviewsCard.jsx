import autorImg from 'image/user-anonim.jpeg';
import { ListItem, Item, Img } from './MovieReviewsCard.styled';
export const MovieReviewsCard = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      <Item>
        {reviews.map(({ id, content, author }) => (
          <ListItem key={id}>
            <h4>Author name: {author}</h4>
            <Img src={autorImg} alt="author" />
            <p>{content}</p>
          </ListItem>
        ))}
      </Item>
    </>
  );
};
