// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { PokemonGrid } from "./pokemon-grid";
// import { TeamProvider } from "@/context/TeamContext";
// import React from "react";

// jest.mock("@/components/ui/SearchBar", () => ({
//   __esModule: true,
//   default: ({ searchText, setSearchText }: { searchText: string; setSearchText: (text: string) => void }) => (
//     <input
//       data-testid="search-bar"
//       value={searchText}
//       onChange={(e) => setSearchText(e.target.value)}
//       placeholder="Search"
//     />
//   ),
// }));

// const testPokemonList = [
//   {
//     id: 1,
//     name: "bulbasaur",
//     sprites: {
//       other: {
//         "official-artwork": {
//           front_default: "https://example.com/bulbasaur.png",
//         },
//       },
//     },
//     types: [{ type: { name: "grass" } }],
//     species: { url: "" },
//     stats: [],
//     height: 7,
//     weight: 69,
//   },
//   {
//     id: 4,
//     name: "charmander",
//     sprites: {
//       other: {
//         "official-artwork": {
//           front_default: "https://example.com/charmander.png",
//         },
//       },
//     },
//     types: [{ type: { name: "fire" } }],
//     species: { url: "" },
//     stats: [],
//     height: 6,
//     weight: 85,
//   },
// ];

// describe("PokemonGrid", () => {
//   it("renders all Pokémon cards initially and filters by name", async () => {
//     render(
//       <TeamProvider>
//         <PokemonGrid pokemonList={testPokemonList} />
//       </TeamProvider>
//     );

//     expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
//     expect(screen.getByText(/charmander/i)).toBeInTheDocument();

//     const input = screen.getByTestId("search-bar");

//     await userEvent.clear(input);
//     await userEvent.type(input, "char");
//     expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
//     expect(screen.getByText(/charmander/i)).toBeInTheDocument();

//     await userEvent.clear(input);
//     await userEvent.type(input, "1");
//     expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
//     expect(screen.queryByText(/charmander/i)).not.toBeInTheDocument();
//   });
// });
