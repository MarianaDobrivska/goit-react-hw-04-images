import { StyledListImg, StyledListItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  openModal,
  largeImageURL,
}) => {
  return (
    <StyledListItem
      className="gallery-item"
      onClick={() => {
        openModal(tags, largeImageURL);
      }}
    >
      <StyledListImg src={webformatURL} alt={tags} />
    </StyledListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
