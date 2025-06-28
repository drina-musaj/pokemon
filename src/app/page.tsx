'use client';

import * as React from 'react';
import '@/lib/env';

import { getPokemonList } from '@/lib/pokemonAPI';
import { PokemonGrid } from '@/components/pokemon-grid';

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <section className='px-4 py-6'>
      <PokemonGrid pokemonList={pokemonList}/>
    </section>
  );
}