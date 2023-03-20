import '../css/common.css';
import '../css/promises-common.css';

// function makeOrder(dish) {
//   const DELAY = 500;

//   return (promise = new Promise((resolve, reject) => {
//     const canFullfill = Math.random() > 0.5;
//     setTimeout(() => {
//       if (canFullfill) {
//         resolve(`Вот ваше блюдо: ${dish}`);
//       }
//       reject('Извините, закончились продукты');
//     }, DELAY);
//   }));
// }

// makeOrder('🎂').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log(`%c${result}`, 'color: lightgreen');
// }
// function onMakeOrderError(error) {
//   console.log(`%c😢 ${error}`, 'color:  lightpink');
// }

// function makeOrder(dish) {
//   return Promise.resolve(`Вот ваш заказ: ${dish}`);
// }

// makeOrder('🎂').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log(`%c${result}`, 'color: lightgreen');
// }

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonById(1).then(onSuccess).catch(onError);
fetchPokemonById(2).then(onSuccess).catch(onError);
fetchPokemonById(3).then(onSuccess).catch(onError);

function onSuccess(pokemon) {
  console.log(pokemon.name);
}

function onError(error) {
  console.log(error);
}
