const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
function fetchPokemonById(pokemonId) {
  return fetch(`${BASE_URL}${pokemonId}/`).then((r) => r.json());
}

export default { fetchPokemonById };
