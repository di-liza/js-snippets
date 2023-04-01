const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд вернул вот такое чудо }';

console.log(1);

try {
  JSON.parse(invalidJSON);
} catch (error) {
  console.log(error);
}

console.log(2);

// try {
//   console.log(1);

//   console.log(JSON.parse(invalidJSON));

//   console.log(2);
// } catch (error) {
//   console.log(error);
//   if (error.name === 'SyntaxError') {
//     console.log('Ошибка парса json надо чтото сделать');
//   }
// }
