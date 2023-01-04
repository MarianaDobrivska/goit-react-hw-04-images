import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Styledlist } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ImageGallery = ({ photos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tags, setTags] = useState('');
  const [photo, setPhoto] = useState('');

  const openModal = (tag, value) => {
    setIsModalOpen(true);
    setTags(tag);
    setPhoto(value);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Styledlist>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              webformatURL={photo.webformatURL}
              tags={photo.tags}
              key={photo.id}
              openModal={openModal}
              largeImageURL={photo.largeImageURL}
            />
          );
        })}
      </Styledlist>
      {isModalOpen && (
        <Modal largeImageURL={photo} tags={tags} onClose={closeModal} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
