import {
  getPokemon,
  getPokemonSpecies,
  getEvolutionChain,
} from "@/lib/pokemonAPI";
import { PokemonData, EvolutionChainLink } from "@/types/pokemonTypes";
import { PokemonDetails } from "@/components/PokemonDetails";

interface Props {
  params: {
    pokemonName: string;
  };
}

function getEvolutionNames(chain: EvolutionChainLink): string[] {
  const names: string[] = [];
  let current = chain;

  while (current) {
    names.push(current.species.name);
    current = current.evolves_to?.[0];
  }

  return names;
}

export default async function PokemonDetailsPage(props: Props) {
  const { pokemonName } = props.params;

  try {
    const pokemonObject: PokemonData = await getPokemon(pokemonName);
    const pokemonSpecies = await getPokemonSpecies(pokemonObject.species.url);
    const evolutionChain = await getEvolutionChain(
      pokemonSpecies.evolution_chain.url,
    );
    const evolutionNames = getEvolutionNames(evolutionChain);

    return (
      <PokemonDetails pokemon={pokemonObject} evolutionNames={evolutionNames} />
    );
  } catch (error) {
    console.error("Error loading Pokemon:", error);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Pokemon Not Found</h1>
          <p className="text-gray-600">Could not load {pokemonName}</p>
        </div>
      </div>
    );
  }
}
