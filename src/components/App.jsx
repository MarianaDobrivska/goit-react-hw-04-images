import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPhotos } from 'API/Pixabay';
import { StyledApp } from './App.styled';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    visibleLoader: false,
    totalPages: 0,
  };

  handleSearchButtonSubmit = value => {
    this.setState({ query: value, photos: [], page: 1, totalPages: 0 });
  };

  handleLoadMoreSubmit = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  isLoadMoreShown = () => {
    const { totalPages, page } = this.state;

    if (totalPages === page || totalPages === 0) {
      return false;
    } else {
      return true;
    }
  };
  componentDidUpdate(_, prevState) {
    const { query, photos, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ visibleLoader: true });
      getPhotos(query, page)
        .then(({ data }) => {
          if (data.hits.length === 0) {
            toast.info(
              `Sorry, there are no images matching your search query '${query}'. Please try again.`,
              {
                position: toast.POSITION.TOP_RIGHT,
              }
            );
            return '';
          }
          let countTotalPages = Math.ceil(data.totalHits / 12);
          this.setState({
            photos: [...photos, ...data.hits],
            totalPages: countTotalPages,
          });
        })
        .catch(error => {
          toast.error('Sorry, something went wrong. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .finally(() => {
          this.setState({ visibleLoader: false });
        });
    }
  }

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSearchButtonSubmit} />
        <ImageGallery photos={this.state.photos} />
        {this.state.visibleLoader && <Loader />}

        {this.isLoadMoreShown() && !this.state.visibleLoader && (
          <Button title="Load more" onClick={this.handleLoadMoreSubmit} />
        )}
        <ToastContainer />
      </StyledApp>
    );
  }
}
