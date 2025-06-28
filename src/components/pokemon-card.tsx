"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/ui/PokemonImage";

interface PokemonCardProps {
  name: string;
}

interface PokemonData {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

export function PokemonCard({ name }: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(false);
        const pokemonObject = await getPokemon(name);
        setPokemonData(pokemonObject);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (loading) {
    return (
      <div className="block w-full">
        <article className="rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 p-0.5 shadow-xl w-full h-full">
          <div className="w-full h-full rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-evenly min-h-[200px]">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="w-[120px] h-[120px] bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="flex justify-center gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  if (error || !pokemonData) {
    return (
      <Link href={name} key={name + "Card"} className="block w-full">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full h-full">
          <div className="w-full h-full rounded-[10px] bg-white p-4 pt-16 sm:p-6 sm:pt-20 flex flex-col justify-between min-h-[200px]">
            <div>
              <h2 className="text-base sm:text-lg font-medium text-gray-900 capitalize text-center">
                {name}
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-[120px] h-[120px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No image</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center flex-wrap gap-2">
              <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                No types
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={name} key={name + "Card"} className="block w-full">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full h-full">
        <div className="w-full h-full rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-evenly min-h-[200px]">
          <div>
            <h2 className="text-base sm:text-lg font-medium text-gray-900 capitalize text-center">
              {name}
            </h2>
            <div className="flex justify-center mt-4">
              <PokemonImage
                src={pokemonData.sprites.other["official-artwork"].front_default}
                alt={`${name} official artwork`}
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center flex-wrap gap-2">
            {pokemonData.types.map((typeInfo, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 capitalize"
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}