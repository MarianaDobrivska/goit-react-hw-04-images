import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPhotos } from 'API/Pixabay';
import { StyledApp } from './App.styled';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [visibleLoader, setVisibleLoader] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearchButtonSubmit = value => {
    setQuery(value);
    setPhotos([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleLoadMoreSubmit = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isLoadMoreShown = () => {
    if (totalPages === page || totalPages === 0) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (query === '') return;

    setVisibleLoader(true);

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
        setPhotos(prevPhotos => [...prevPhotos, ...data.hits]);
        setTotalPages(countTotalPages);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setVisibleLoader(false);
      });
  }, [query, page]);

  return (
    <StyledApp>
      <Searchbar onSubmit={handleSearchButtonSubmit} />
      <ImageGallery photos={photos} />
      {visibleLoader && <Loader />}

      {isLoadMoreShown() && !visibleLoader && (
        <Button title="Load more" onClick={handleLoadMoreSubmit} />
      )}
      <ToastContainer />
    </StyledApp>
  );
};
