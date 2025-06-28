"use client"

import { useState } from "react"
import SearchBar from "./buttons/SearchBar";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps{
    pokemonList: any
}

export function PokemonGrid({pokemonList} : PokemonGridProps){
    const [searchText, setSearchText] = useState("");

    console.log(pokemonList);

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList);
    
    return (
        <>
            <div>
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {filteredPokemonList.map((pokemon: any) => {
                    return(
                        <PokemonCard key={pokemon.name} name={pokemon.name} />
                    )
                })}
            </div>
        </>
    )
}