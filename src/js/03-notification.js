import '../css/common.css';

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notificationEl = document.querySelector('.js-alert');

notificationEl.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  notificationEl.classList.add('is-visible');
  timeoutId = setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}
function hideNotification() {
  notificationEl.classList.remove('is-visible');
}
