import { StyledButton } from './Button.styled';

export const Button = ({ title, onClick }) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {title}
    </StyledButton>
  );
};
