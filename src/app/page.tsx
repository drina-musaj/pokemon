import * as React from "react";
import "@/lib/env";
import Logo from "~/svg/pokemon-logo.svg";

import { getPokemonList } from "@/lib/pokemonAPI";
import { PokemonGrid } from "@/components/pokemon-grid";

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <section className="px-4 py-6">
      <div className="flex flex-col items-center py-4">
        <Logo className="w-16"></Logo>
        <header className="text-center text-3xl font-bold">
          Welcome to your Pokemon World
        </header>
      </div>
      <PokemonGrid pokemonList={pokemonList} />
    </section>
  );
}
