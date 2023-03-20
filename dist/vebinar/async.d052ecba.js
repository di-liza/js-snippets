"use strict";
/*
 * Синхронний vs Асинхронний JS
 */ // setTimeout(() => {
//   console.log('HI from setTimeout');
// }, 2000);
// setInterval(() => {
//   console.log('Tick');
// }, 2000);
// console.log('First');
// const greet = () => {
//   console.log('Hello, user!');
// };
// for (let i = 0; i < 10000000000; i++) {}
// console.log('Second');
// greet();
// Стек виклику функцій
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);
// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)
let seconds = 1;
const intervalId = setTimeout(()=>{
    console.log(seconds);
//   seconds += 1;
}, 5000);
console.log(`IntervalId: ${intervalId}`);
document.addEventListener("click", ()=>{
    clearTimeout(intervalId);
});

//# sourceMappingURL=async.d052ecba.js.map
