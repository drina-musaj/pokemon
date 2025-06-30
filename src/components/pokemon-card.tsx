"use client";

import Link from "next/link";
import { PokemonImage } from "@/components/ui/PokemonImage";
import { PokemonCardProps } from "@/types/pokemonTypes";
import { useTeam } from "@/context/TeamContext";

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const { isInTeam, toggleTeam } = useTeam();
  const inTeam = isInTeam(pokemon);

  return (
    <div className="w-full">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full h-full">
        <div className="w-full h-full rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-between min-h-[200px]">
          <Link href={pokemon.name}>
            <div>
              <h2 className="text-base sm:text-lg font-medium text-gray-900 capitalize text-center">
                {pokemon.name}
              </h2>
              <div className="flex justify-center mt-4">
                <PokemonImage
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={`${pokemon.name} official artwork`}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Link>

          <div className="mt-4 flex justify-center flex-wrap gap-2">
            {pokemon.types.map((typeInfo, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 capitalize"
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTeam(pokemon);
              }}
              className={`text-white text-sm px-4 py-1 rounded-full ${
                inTeam
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-yellow-400 hover:bg-yellow-500"
              }`}
            >
              {inTeam ? "Remove from Team" : "Add to Team"}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
