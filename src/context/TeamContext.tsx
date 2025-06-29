"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CompletePokemonData } from "@/types/pokemonTypes";

type TeamContextType = {
  team: CompletePokemonData[];
  toggleTeam: (pokemon: CompletePokemonData) => void;
  isInTeam: (pokemon: CompletePokemonData) => boolean;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<CompletePokemonData[]>([]);

  const isInTeam = (pokemon: CompletePokemonData) =>
    team.some((p) => p.name === pokemon.name);

  const toggleTeam = (pokemon: CompletePokemonData) => {
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
