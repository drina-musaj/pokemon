
import Link from "next/link";

interface PokemonCardProps {
    name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
    return (
        <Link
            href={name}
            key={name + "Card"}
            className="inline-block"
        >
            <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-fit">
                <div className="w-60 rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                    <h2 className="text-lg font-medium text-gray-900 capitalize">
                        {name}
                    </h2>
                    
                    <div className="mt-4 flex flex-wrap gap-1">
                        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                            Pokémon
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}