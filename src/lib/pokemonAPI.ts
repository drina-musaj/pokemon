const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon: ${name}`);
  }
  const data = await response.json();
  return data;
}

export async function getEvolutionChain(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch evolution chain");
  }
  const data = await response.json();
  return data.chain;
}

export async function getPokemonSpecies(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon species");
  }
  const data = await response.json();
  return data;
}

export async function getPokemonList() {
  try {
    const response = await fetch(POKEMON_API + "pokemon?limit=20&offset=0");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon list");
    }
    const data = await response.json();
    const pokemonList = data.results;

    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon: { name: string; url: string }) => {
        const pokemonDetails = await getPokemon(pokemon.name);
        return {
          id: pokemonDetails.id,
          name: pokemon.name,
          sprites: pokemonDetails.sprites,
          types: pokemonDetails.types,
          stats: pokemonDetails.stats,
          height: pokemonDetails.height,
          weight: pokemonDetails.weight,
          species: pokemonDetails.species,
        };
      }),
    );

    return pokemonData;
  } catch (error) {
    console.error("Oh no! The Poké Ball failed. Try again!", error);
    return [];
  }
}
