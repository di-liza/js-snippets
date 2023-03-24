function fetchPokemonById(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(r =>
    r.json(),
  );
}

export default { fetchPokemonById };
