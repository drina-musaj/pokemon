"use client";

import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import { PokemonCard } from "./pokemon-card";
import { PokemonData } from "@/types/pokemonTypes";

export function PokemonGrid({ pokemonList }: { pokemonList: PokemonData[] }) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (list: PokemonData[]) => {
    const searchWord = searchText.toLowerCase().trim();
    const searchAsNumber = Number(searchText);

    return list.filter((pokemon) => {
      const matchesId = !isNaN(searchAsNumber) && pokemon.id === searchAsNumber;
      const matchesName = pokemon.name.toLowerCase().includes(searchWord);
      return matchesId || matchesName;
    });
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div>
      <div className="mb-6">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
