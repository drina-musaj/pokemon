import Image from "next/image";

interface PokemonImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export function PokemonImage({ 
    src, 
    alt, 
    width = 200, 
    height = 200, 
    className = "" 
}: PokemonImageProps) {
    return (
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
}