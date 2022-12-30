import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onPressEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPressEscClose);
  }

  onPressEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onkBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <StyledOverlay onClick={this.onkBackdropClick}>
        <StyledModal>
          <img src={largeImageURL} alt={tags} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
