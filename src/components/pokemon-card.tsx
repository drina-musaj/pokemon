import Link from "next/link";
import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/ui/PokemonImage";

interface PokemonCardProps {
  name: string;
}

export async function PokemonCard({ name }: PokemonCardProps) {
  try {
    const pokemonObject = await getPokemon(name);

    return (
      <Link href={name} key={name + "Card"} className="block w-full">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full h-full">
          <div className="w-full h-full rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-evenly min-h-[200px]">
            <div>
              <h2 className="text-base sm:text-lg font-medium text-gray-900 capitalize text-center">
                {name}
              </h2>
              <div className="flex justify-center mt-4">
                <PokemonImage
                  src={
                    pokemonObject.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt={`${name} official artwork`}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center flex-wrap gap-2">
              {pokemonObject.types.map((typeInfo: any, index: number) => (
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
  } catch (error) {
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
}
