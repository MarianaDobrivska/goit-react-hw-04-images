import { InfinitySpin } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <InfinitySpin width="200" color="#3f51b5" />
    </StyledLoaderWrapper>
  );
};
