import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick }) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
