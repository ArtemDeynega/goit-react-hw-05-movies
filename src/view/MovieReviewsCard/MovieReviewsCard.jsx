import autorImg from 'image/user-anonim.jpeg';
import PropTypes from 'prop-types';
import { ListItem, Item, Img } from './MovieReviewsCard.styled';
export const MovieReviewsCard = ({ reviews }) => {
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
MovieReviewsCard.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};
