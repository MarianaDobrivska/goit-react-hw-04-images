import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className="gallery">
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            webformatURL={photo.webformatURL}
            tags={photo.tags}
            key={photo.id}
          />
        );
      })}
    </ul>
  );
};
