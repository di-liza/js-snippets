import '../../css/common.css';
// Створення нової дати

// const date = new Date(2022, 16, 32, 2, 4, 50);

// console.log(date);

// console.log(date.getMonth());
// console.log(date.getDay());

// Методи дат

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// const date = new Date(0);

// console.log(date);

// console.log(date.getUTCHours());
// console.log(date.getHours());

// const date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const weekDays = ['НД', 'ПН', 'ВТ', 'CР', 'ЧТ', 'ПТ', 'СБ'];

// const getWeekDay = date => {
//   const weekDayIndex = date.getDay();

//   return weekDays[weekDayIndex];
// };

// const date = new Date();

// date.setDate(21);

// console.log(getWeekDay(date));

//? TASK 03
// Створіть функцію getLastDayOfMonth(year, month), яка повертає останнє число місяця.
// Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};

console.log(getLastDayOfMonth(2011, 1));
