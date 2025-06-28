import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/ui/PokemonImage";

export default async function PokemonDetails({params} : { params : {pokemonName: string}}) {
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName}</h1>
            <PokemonImage 
                src={pokemonObject.sprites.other["official-artwork"].front_default}
                alt={`${pokemonName} official artwork`}
                width={200}
                height={200}
                className=""
            />
        </>
    );
}