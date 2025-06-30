import { render, screen, within } from "@testing-library/react";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonData } from "@/types/pokemonTypes";

jest.mock("@/components/ui/PokemonImage", () => ({
  PokemonImage: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="pokemon-image" src={src} alt={alt} />
  ),
}));

jest.mock("@/components/ui/StatProgressBar", () => ({
  __esModule: true,
  default: ({ statValue }: { statValue: number }) => (
    <div data-testid="stat-bar">{statValue}</div>
  ),
}));

const mockPokemon: PokemonData = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 69,
  sprites: {
    other: {
      "official-artwork": {
        front_default: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      },
    },
  },
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  stats: [
    { base_stat: 45, stat: { name: "hp" } },
    { base_stat: 49, stat: { name: "attack" } },
    { base_stat: 49, stat: { name: "defense" } },
  ],
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
};

const evolutionNames = ["bulbasaur", "ivysaur", "venusaur"];

test("renders PokemonDetails correctly", () => {
  render(
    <PokemonDetails pokemon={mockPokemon} evolutionNames={evolutionNames} />,
  );

  expect(
    screen.getByRole("heading", { name: /bulbasaur/i }),
  ).toBeInTheDocument();
  expect(screen.getByText("HP")).toBeInTheDocument();
  expect(screen.getByTestId("pokemon-image")).toBeInTheDocument();

  const evolutionSection = screen.getByText(/evolution chain/i).closest("div");
  const withinEvo = within(evolutionSection!);

  evolutionNames.forEach((name) => {
    expect(withinEvo.getByText(new RegExp(name, "i"))).toBeInTheDocument();
  });

  expect(screen.getByText("Base Stats")).toBeInTheDocument();
  expect(screen.getAllByTestId("stat-bar")).toHaveLength(
    mockPokemon.stats.length,
  );

  expect(screen.getByText(/Height:/)).toHaveTextContent("0.7m");
  expect(screen.getByText(/Weight:/)).toHaveTextContent("6.9kg");
});
