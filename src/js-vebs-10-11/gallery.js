import { UnsplashAPI } from './unsplash-api';
import { refs } from './refs-gallery';
import galleryCardTMPL from '../templates/gallery-card.hbs';

const unsplashAPI = new UnsplashAPI();

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadmoreBtnClick);

function handleSearchFormSubmit(event) {
  event.preventDefault();
  if (!refs.searchInput.value) {
    return;
  }
  unsplashAPI.query = refs.searchInput.value.trim();
  getPhotos();
  refs.searchInput.value = '';
}

async function getPhotos() {
  try {
    const { data } = await unsplashAPI.fethPhoto();
    console.log(data);
    refs.gallery.innerHTML = galleryCardTMPL(data.results);
    hideLoadMoreBtn(data);
    refs.loadMoreBtn.classList.remove('is-hidden');
  } catch (error) {
    console.log('error:', error);
  }
}

async function handleLoadmoreBtnClick() {
  unsplashAPI.incrementPage();
  try {
    const { data } = await unsplashAPI.fethPhoto();
    hideLoadMoreBtn(data);
    refs.gallery.insertAdjacentHTML('beforeend', galleryCardTMPL(data.results));
  } catch (error) {
    console.log(error);
  }
}

function hideLoadMoreBtn(data) {
  if (data.total_pages === unsplashAPI.page || data.total_pages === 0) {
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }
}
