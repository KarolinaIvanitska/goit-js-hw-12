import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

import { renderMarkup } from './js/render-function';
import { getPhotos } from './js/pixabay-api';

const formElem = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const imageEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

hideLoadMoreBtn();

//=========Form-Input===========================

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  imageEl.innerHTML = '';

  page = 1;

  const userSearch = e.target.elements.search.value.trim();

  if (userSearch === '') {
    hideLoader();
    hideLoadMoreBtn();
    iziToast.warning({
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ffa000',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  showLoadMoreBtn();
  try {
    const data = await getPhotos(userSearch, page);
    if (data.hits.length === 0) {
      hideLoadMoreBtn();
      hideLoader();
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    if (data.totalHits > perPage) {
      showLoadMoreBtn();
    }

    renderMarkup(imageEl, data.hits);
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  e.target.reset();
});

//=========LOADER=============================
function showLoader() {
  if (loader) {
    loader.style.display = 'block';
  }
}

function hideLoader() {
  if (loader) {
    loader.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', hideLoader);
//============BTN-LOAD-MORE==================

function hideLoadMoreBtn() {
  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
  }
}

function showLoadMoreBtn() {
  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'block';
  }
}

//========================================
let page = 1;
const perPage = 15;
let userSearch;

loadMoreBtn.addEventListener('click', async e => {
  showLoader();

  page += 1;

  const data = await getPhotos(userSearch, page);

  renderMarkup(imageEl, data.hits);

  const lastPage = Math.ceil(data.totalHits / perPage);

  if (page === lastPage) {
    hideLoadMoreBtn();
    iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      message: 'We are sorry, but you have reached the end of search results',
      position: 'topRight',
    });
  }
  hideLoader();
});

//=========FUNCTION-SCROLL=======================
