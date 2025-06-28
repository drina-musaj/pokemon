'use client';

import * as React from 'react';
import '@/lib/env';

import { getPokemonList } from '@/lib/pokemonAPI';
import Logo from '~/svg/pokemon-logo.svg';
import { PokemonGrid } from '@/components/pokemon-grid';
import { Footer } from '@/components/Footer';


export default async function HomePage() {

  const pokemonList = await getPokemonList();

  return (
    <>
    <main>
  
      <section className='bg-white max-w-screen-lg mx-auto'>
        <div>
          <Logo className='w-16' />
          <h1 className='mt-4'>Pokemon</h1>
       <div className=''>
          <PokemonGrid pokemonList={pokemonList}/>
        </div>        
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
