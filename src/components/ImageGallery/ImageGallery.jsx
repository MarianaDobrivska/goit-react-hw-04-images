import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Styledlist } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    isModalOpen: false,
    data: {
      tags: '',
      photo: ',',
    },
  };

  openModal = (tag, value) =>
    this.setState({
      isModalOpen: true,
      data: {
        tags: tag,
        photo: value,
      },
    });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <>
        <Styledlist>
          {this.props.photos.map(photo => {
            return (
              <ImageGalleryItem
                webformatURL={photo.webformatURL}
                tags={photo.tags}
                key={photo.id}
                openModal={this.openModal}
                largeImageURL={photo.largeImageURL}
              />
            );
          })}
        </Styledlist>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.state.data.photo}
            tags={this.state.data.tags}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
