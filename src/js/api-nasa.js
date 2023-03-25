import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/nasa-api.css';
// import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import FetchNasaApi from './fetch-nasa-api';
import template from '../templates/renderPhotos.hbs';
import render from './renderNasaPhoto';

const searchBtn = document.querySelector('.search-photo');
const containerEl = document.querySelector('.container');
const showMoreBtn = document.querySelector('.show-more-photo');

let galleryLightbox = new SimpleLightbox('.container .photo-link', {
  captionDelay: 250,
  captionsData: 'alt',
});

const searchPhotos = new FetchNasaApi();

searchBtn.addEventListener('click', getPhotos);
showMoreBtn.addEventListener('click', getPhotos);

function getPhotos() {
  searchPhotos
    .fetchApi()
    .then(dataPhotos => {
      console.log(dataPhotos);
      const photos = dataPhotos.photos;

      renderPhotosGallery(photos);
      showMoreBtn.classList.remove('hide');
      galleryLightbox.refresh();
    })
    .catch(err => Notify.failure('Try later'));
}

function renderPhotosGallery(photos) {
  photos.map(photo => {
    containerEl.insertAdjacentHTML('beforeend', template(photo));
  });
}
