const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}

export async function getEvolutionChain(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data.chain; 
}

export async function getPokemonSpecies(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data; 
}
export async function getPokemonList() {
  try {
    const response = await fetch(POKEMON_API + "pokemon?limit=20&offset=0");
    const data = await response.json();
    const pokemonList = data.results;

    const PokemonData = await Promise.all(
      pokemonList.map(async (pokemon: { name: string; url: string }) => {
        const pokemonData = await getPokemon(pokemon.name);
        return {
          id: pokemonData.id,
          name: pokemon.name,
          sprites: pokemonData.sprites,
          types: pokemonData.types,
        };
      }),
    );
    

    return PokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
}
