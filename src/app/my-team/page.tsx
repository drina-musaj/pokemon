"use client";

import { useTeam } from "@/context/TeamContext";
import { PokemonCard } from "@/components/pokemon-card";

export default function MyTeamPage() {
  const { team } = useTeam();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Pokémon Team</h1>
      {team.length === 0 ? (
        <p className="text-gray-600">No Pokémon in your team yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {team.map((pokemon) => (
            <PokemonCard key={pokemon.name + "-team"} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}
