import { LoadContainer } from './Loader.styled';
import { ThreeCircles } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <LoadContainer>
      <ThreeCircles
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />
    </LoadContainer>
  );
};
