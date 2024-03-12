import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const imageEl = document.querySelector('.gallery');

export function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` 
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${largeImageURL}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${tags}"</p>
      <p class = "likes"><span class="text"> likes</span> "${likes}"</p>
      <p class="likes"> <span class="text">views</span>"${views}"</p>
      <p class="likes"> <span class="text">comments</span>"${comments}"</p>
      <p class="likes"> <span class="text">downloads</span>"${downloads}"</p>
      </div>
</li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderMarkup(image, arr) {
  imageEl.insertAdjacentHTML('beforeend', imagesTemplate(arr));
}

export function refreshLightBox() {
  lightbox.refresh();
}
