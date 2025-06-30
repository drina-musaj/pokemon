// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { PokemonCard } from "./pokemon-card";
// import { TeamProvider } from "@/context/TeamContext";
// import React from "react";

// const testPokemon = {
//   id: 7,
//   name: "squirtle",
//   sprites: {
//     other: {
//       "official-artwork": {
//         front_default: "https://example.com/squirtle.png",
//       },
//     },
//   },
//   types: [{ type: { name: "water" } }],
//   species: { url: "https://pokeapi.co/api/v2/pokemon-species/7/" },
//   stats: [{ stat: { name: "hp" }, base_stat: 44 }],
//   height: 5,
//   weight: 90,
// };

// describe("PokemonCard", () => {
//   it("renders the Pokémon name and toggles team state on button click", async () => {
//     render(
//       <TeamProvider>
//         <PokemonCard pokemon={testPokemon} />
//       </TeamProvider>
//     );

//     expect(screen.getByText(/squirtle/i)).toBeInTheDocument();

//     const button = screen.getByRole("button");
//     expect(button).toHaveTextContent(/add to team/i);

//     await userEvent.click(button);
//     expect(button).toHaveTextContent(/remove from team/i);

//     await userEvent.click(button);
//     expect(button).toHaveTextContent(/add to team/i);
//   });
// });
