import '../css/common.css';
import template from '../templates/pokemon-card.hbs';
// document.body.innerHTML = template();

const pokemonContainer = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');
searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const swarchQuery = form.elements.query.value;

  fetchPokemonById(swarchQuery)
    .then(renderPokemonCard)
    .catch(onError)
    .finally(form.reset());
}

function fetchPokemonById(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(r =>
    r.json(),
  );
}

function renderPokemonCard(pokemon) {
  const markup = template(pokemon);
  pokemonContainer.innerHTML = markup;
}

function onError(error) {
  alert('Упс, что то пошло не так');
}

// function fetchPokemonById(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(r =>
//     r.json(),
//   );
// }

// function renderPokemonCard(pokemon) {
//   const markup = `<div class="card">
//     <div class="card-img-top">
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//     </div>
//     <div class="card-body">
//         <h2 class="card-title">Имя: ${pokemon.name}</h2>
//         <p class="card-text">Вес: ${pokemon.weight}</p>
//         <p class="card-text">Рост: ${pokemon.height}</p>
//         <p class="card-text"><b>Умения</b></p>
//         <ul class="list-group"></ul>
//        ${getPokemonAbilityName(pokemon)}
//         </ul>
//     </div>
// </div>`;
//   pokemonContainer.innerHTML = markup;
// }

// function getPokemonAbilityName(pokemon) {
//   return pokemon.abilities
//     .map(ability => `<li class ="list-group-item">${ability.ability.name}</li>`)
//     .join('');
// }
