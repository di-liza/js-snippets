import '../css/common.css';

import BSN from 'bootstrap.native';
let modal = new BSN.Modal('#subscription-modal');

const modalEl = document.querySelector('#subscription-modal');

const subscribeBtn = document.querySelector('button[data-subscribe]');
const closeBtn = document.querySelector('.btn-secondary');

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let intervalId = null;
let haSubscribed = false;

closeBtn.addEventListener('click', onModalOpen);
subscribeBtn.addEventListener('click', onSubscribeBtnClick);
onModalOpen();

function onModalOpen() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || haSubscribed) {
    console.log('MAX_PROMPT_ATTEMPTS');
    modal.hide();
    return;
  }
  setTimeout(() => {
    modal.show();
    promptCounter += 1;
    console.log('promptCounter:', promptCounter);
  }, PROMPT_DELAY);
}
function onSubscribeBtnClick() {
  haSubscribed = true;
  modal.hide();
}

// // intervalId = setInterval(() => {
// //   if (promptCounter === MAX_PROMPT_ATTEMPTS || haSubscribed) {
// //     clearInterval(intervalId);
// //     return;
// //   }
// //   console.log('Subscribe - ' + Date.now());
// //   promptCounter += 1;
// // }, PROMPT_DELAY);

// import BSN from 'bootstrap.native';

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 500;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
