"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PokemonData } from "@/types/pokemonTypes";

type TeamContextType = {
  team: PokemonData[];
  toggleTeam: (pokemon: PokemonData) => void;
  isInTeam: (pokemon: PokemonData) => boolean;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<PokemonData[]>([]);

  const isInTeam = (pokemon: PokemonData) =>
    team.some((p) => p.name === pokemon.name);

  const toggleTeam = (pokemon: PokemonData) => {
    setTeam((prev) =>
      isInTeam(pokemon)
        ? prev.filter((p) => p.name !== pokemon.name)
        : [...prev, pokemon],
    );
  };

  return (
    <TeamContext.Provider value={{ team, toggleTeam, isInTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
