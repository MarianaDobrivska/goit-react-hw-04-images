import axios from 'axios';

export function getPhotos(query, page = 1) {
  const params = {
    per_page: 12,
    page,
    key: '31455017-154c201cdb83c0a22577e9bfb',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
  };

  axios.defaults.baseURL = 'https://pixabay.com';
  const data = axios.get(`/api/?`, { params }).then(data => data);
  console.log(data);
  return data;
}
