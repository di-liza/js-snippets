import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import searchPhotos from './searchPhotos';
import template from '../templates/renderPhotos.hbs';
import render from './renderNasaPhoto';

const searchBtn = document.querySelector('.search-photo');
const containerEl = document.querySelector('.container');

searchBtn.addEventListener('click', getPhotos);

function getPhotos() {
  searchPhotos()
    .then(dataPhotos => {
      const photos = dataPhotos.photos;
      photos.map(photo => {
        containerEl.insertAdjacentHTML('beforeend', template(photo));
      });
    })
    .catch(err => Notify.failure('Try later'));
}
