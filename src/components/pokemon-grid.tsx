"use client";

import { useState } from "react";
import SearchBar from "@/components/buttons/SearchBar";
import { PokemonCard } from "./pokemon-card";
import { CompletePokemonData } from "@/types/pokemonTypes";

interface PokemonGridProps {
  pokemonList: CompletePokemonData[];
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

 const searchFilter = (pokemonList: CompletePokemonData[]) => {
  const searchLower = searchText.toLowerCase().trim();
  const searchAsNumber = Number(searchText);

  return pokemonList.filter((pokemon) => {
    const matchesId = !isNaN(searchAsNumber) && pokemon.id === searchAsNumber;
    const matchesName = pokemon.name.toLowerCase().includes(searchLower);

    return matchesId || matchesName;
  });
};

  const filteredPokemonList = searchFilter(pokemonList);

  console.log(filteredPokemonList)

  return (
    <div>
      <div className="mb-6">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredPokemonList.map((pokemon: CompletePokemonData) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
