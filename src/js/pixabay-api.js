const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42814531-6217cd85928bc5270423ce53d';

export function getPhotos(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}/?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
