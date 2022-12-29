import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getPhotos } from 'API/Pixabay';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    photos: [],
  };

  handleSearchButtonSumbit = value => {
    this.setState({ query: value });
  };

  componentDidUpdate(_, prevState) {
    const { query, photos } = this.state;
    if (query !== prevState.query) {
      getPhotos(query).then(({ data }) =>
        this.setState({ photos: [...photos, ...data.hits] })
      );
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchButtonSumbit} />
        <ImageGallery photos={this.state.photos} />
      </div>
    );
  }
}
