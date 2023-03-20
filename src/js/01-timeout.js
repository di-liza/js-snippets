import '../css/common.css';

function gree() {
  console.log('Before timeSet');
}

const timeID = setTimeout(() => {
  console.log('timeout run');
}, 2000);

const shouldCancelTimer = Math.random() > 0.3;
console.log('shouldCancelTimer:', shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(1);
}
