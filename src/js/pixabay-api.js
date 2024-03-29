import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42814531-6217cd85928bc5270423ce53d';

let perPage = 15;

export async function getPhotos(q, page) {
  const params = {
    key: API_KEY,
    q,
    page,
    perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const res = await axios.get(`${BASE_URL}/`, { params });
  return res.data;
}
