import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42814531-6217cd85928bc5270423ce53d';

let page = 1;
let perPage = 15;
let totalHits = 0;
const lastPage = Math.ceil(totalHits / perPage);

export async function getPhotos(q) {
  const params = {
    key: API_KEY,
    q,
    _page: page,
    _limit: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const res = await axios.get(`${BASE_URL}/`, { params });
  return res.data;
}