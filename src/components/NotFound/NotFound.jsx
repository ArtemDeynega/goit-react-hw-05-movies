import images from '../../image/not-found.webp';
import { Img } from './NotFound.styled';

export const NotFound = () => {
  return (
    <>
      <Img src={images} alt="not found" />
    </>
  );
};
