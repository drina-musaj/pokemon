export interface PokemonListItem {
  name: string;
  url: string;
}

export interface CompletePokemonData {
  name: string;
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

export interface PokemonGridProps {
  pokemonList: CompletePokemonData[]; 
}

export interface PokemonCardProps {
  pokemon: CompletePokemonData; 
}

export interface PokemonData {
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