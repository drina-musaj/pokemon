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
  species: any;
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
}

export interface PokemonGridProps {
  pokemonList: PokemonData[];
}

export interface PokemonCardProps {
  pokemon: PokemonData;
}
