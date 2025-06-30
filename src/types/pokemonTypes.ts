export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[]; 
  stats: PokemonStats[]; 
  height: number;
  weight: number;
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonGridProps {
  pokemonList: PokemonData[];
}

export interface PokemonCardProps {
  pokemon: PokemonData;
}