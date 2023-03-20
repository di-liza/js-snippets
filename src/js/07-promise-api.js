import '../css/common.css';
import '../css/promises-common.css';
// Change value of isSuccess variable to call resolve or reject

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// promise.then(onSucsess).catch(onErorr);

// function onSucsess(result) {
//   console.log(`✅ ${result}`);
// }

// function onErorr(erorr) {
//   console.log(`❌ ${erorr}`);
// }

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Done');
    }
    reject('Failed');
  }, 1000);
});

promise
  .then(result => {
    console.log(`%c✅ ${result}`, 'color: lightgreen; font-weight: bold;');
    return result;
  })
  .catch(error => {
    console.log(`%c❌ ${error}`, 'color: red');
  })
  .finally(() => {
    console.log(`%cI’ll be done anyway`, 'color:lightblue');
  });
