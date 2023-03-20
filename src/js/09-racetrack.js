import '../css/common.css';
import '../css/promises-common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCount = 0;
const refs = {
  startRaceBtn: document.querySelector('.js-start-race'),
  resultTable: document.querySelector('.js-results-table'),
  winner: document.querySelector('.js-winner'),
  inProgress: document.querySelector('.js-progress'),
};

refs.startRaceBtn.addEventListener('click', onStart);

function onStart() {
  const promises = horses.map(run);
  raceCount += 1;

  updateWinnerFiled('');
  updateProgressFiled('👀 Заезд начался. ставки больше не принимаются!');

  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsePromises) {
  //  возвращает самый первый выполнившийся промис
  Promise.race(horsePromises).then(({ horse, time }) => {
    updateWinnerFiled(`🐎 Победил ${horse}, финишировав за ${time} sec`);
    updateResultTable({ horse, time, raceCount });
  });
}

function waitForAll(horsePromises) {
  Promise.all(horsePromises).then(() => {
    updateProgressFiled('🎈Заезд окончен, принимаються ставки!');
  });
}

function updateWinnerFiled(message) {
  refs.winner.textContent = message;
}

function updateProgressFiled(message) {
  refs.inProgress.textContent = message;
}
function updateResultTable({ horse, time, raceCount }) {
  const tr = `<tr><td>${raceCount}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.resultTable.insertAdjacentHTML('beforeend', tr);
}

// *  Вспомогательные
function run(horse) {
  return (promise = new Promise(resolve => {
    const time = getRundomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  }));
}

function getRundomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// const promises = horses.map(horse => run(horse));

// function run(horse) {
//   return (promise = new Promise(resolve => {
//     const time = getRundomTime(2000, 3500);
//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   }));
// }

// console.log(
//   '%c 👀 Заезд начался. ставки боьше не принимаются!',
//   'font-weight: bold',
// );

// //  возвращает самый первый выполнившийся промис
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c🐎 Победил ${horse}, финишировав за ${time} sec`,
//     'color: lightgreen; font-size: 14px',
//   );
// });

// Promise.all(promises)
//   .then(promises => {
//     let counter = 1;
//     return promises
//       .slice()
//       .sort((a, b) => b.time - a.time)
//       .map(({ horse, time }) => {
//         counter += 1;
//         console.log(
//           `%c✨ Занял ${counter} место место ${horse}, финишировав за ${time} sec`,
//           'color: teal',
//         );
//       });
//   })
//   .finally(() =>
//     console.log('%cЗаезд окончен, принимаються ставки', 'color: lightblue'),
//   );

// function getRundomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
