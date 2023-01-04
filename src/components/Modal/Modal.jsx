import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  const onPressEscClose = e => {
    if (e.code === 'Escape') onClose();
  };

  const onkBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };
  useEffect(() => {
    window.addEventListener('keydown', onPressEscClose);
    return () => {
      window.removeEventListener('keydown', onPressEscClose);
    };
  });
  return (
    <StyledOverlay onClick={onkBackdropClick}>
      <StyledModal>
        <img src={largeImageURL} alt={tags} />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
