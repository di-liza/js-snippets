import '../css/common.css';

const btnSetEl = document.querySelector('[data-action="set"]');
const btnClearEl = document.querySelector('[data-action="clear"]');
const btnClick = document.querySelector('[data-action="click"]');

btnSetEl.addEventListener('click', onBtnSetClick);
btnClearEl.addEventListener('click', onBtnClearClick);
btnClick.addEventListener('click', onBtnClick);

let intervalId = null;
function logger(time) {
  console.log(`Log every ${time}ms`);
}

function onBtnSetClick() {
  intervalId = setInterval(logger, 2000, 2000);
}
function onBtnClearClick() {
  clearInterval(7);
}

function onBtnClick() {
  setInterval(() => {
    console.log('You clicked me');
  }, 3000);
}

console.log('Hi');
console.log('Welcome!');
