import { getPokemon, getPokemonSpecies, getEvolutionChain } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/ui/PokemonImage";
import { PokemonData } from "@/types/pokemonTypes";
import StatProgressBar from "@/components/ui/StatProgressBar";

const typeGradients: Record<string, string> = {
  fire: "from-red-400 via-orange-400 to-yellow-400",
  water: "from-blue-400 via-cyan-400 to-blue-300",
  grass: "from-green-400 via-lime-400 to-green-300",
  poison: "from-purple-500 via-purple-400 to-pink-400",
  flying: "from-blue-300 via-indigo-300 to-purple-300",
  bug: "from-green-500 via-lime-500 to-green-400",
  normal: "from-gray-300 via-gray-200 to-gray-300",
};

export default async function PokemonDetails({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;
  const pokemonObject: PokemonData = await getPokemon(pokemonName);

  const pokemonSpecies = await getPokemonSpecies(pokemonObject.species.url);

  const evolutionChain = await getEvolutionChain(pokemonSpecies.evolution_chain.url);

  const getEvolutionNames = (chain: any): string[] => {
    const evolutionNames: string[] = [];
    let current = chain;

    while (current) {
      evolutionNames.push(current.species.name);
      current = current.evolves_to[0];
    }

    return evolutionNames;
  };

  const evolutionNames = getEvolutionNames(evolutionChain);

  const primaryType = pokemonObject.types[0]?.type.name || "normal";
  const cardGradient = typeGradients[primaryType] || typeGradients.normal;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div
        className={`bg-gradient-to-br ${cardGradient} p-4 rounded-3xl shadow-2xl border-8 border-yellow-400 max-w-md w-full`}
      >
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg border border-white border-opacity-20">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {pokemonName}
            </h1>
            <div className="text-right">
              <div className="text-sm text-gray-600">HP</div>
              <div className="text-2xl font-bold text-red-600">
                {pokemonObject.stats.find(
                  (stat) => stat.stat.name === "hp"
                )?.base_stat || 0}
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            {pokemonObject.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-700 text-white capitalize"
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg border border-white border-opacity-20 flex justify-center">
          <PokemonImage
            src={pokemonObject.sprites.other["official-artwork"].front_default}
            alt={`${pokemonName} official artwork`}
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </div>

        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg border border-white border-opacity-20">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Evolution Chain
          </h2>
          <div className="flex justify-center gap-4">
            {evolutionNames.map((evolutionName) => (
              <div key={evolutionName} className="flex flex-col items-center">
                <span className="text-sm text-gray-800 capitalize">{evolutionName}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg border border-white border-opacity-20">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Base Stats
          </h2>
          <div className="space-y-3">
            {pokemonObject.stats.map((statObject) => {
              const statName = statObject.stat.name;
              const statValue = statObject.base_stat;

              return (
                <div key={statName} className="flex items-center gap-3">
                  <div className="w-20 text-sm font-semibold text-gray-700 text-right">
                    {statName}
                  </div>
                  <div className="w-8 text-sm font-bold text-gray-800 text-center">
                    {statValue}
                  </div>
                  <div className="flex-1">
                    <StatProgressBar statValue={statValue} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="bg-white bg-opacity-40 rounded-xl p-2">
            <div className="text-xs text-gray-600">
              Height: {pokemonObject.height / 10}m | Weight:{" "}
              {pokemonObject.weight / 10}kg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
