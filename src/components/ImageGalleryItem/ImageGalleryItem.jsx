import { StyledListImg, StyledListItem } from './ImageGalleryItem.styled';

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
