import * as React from 'react';
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import PokemonThumbnail from './components/PokemonThumbnail'
import api from "./api";
import { Pokemon } from "./types";
import PokemonDrawer from './components/PokemonDrawer';

const App: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [selected, setSelected] = React.useState<Pokemon | null>(null);
  React.useEffect(() => {
    api.list(page)
      .then(newPokemons => setPokemons(pokemons => pokemons.concat(newPokemons)));

  }, [page]);

  console.log(pokemons)

  return (
    <Stack 
    padding={3} 
    spacing={6}
    backgroundColor='whitesmoke'
    >1
      <Heading 
      fontSize="4xl" 
      marginLeft={3}
      >
        Pokedex</Heading>
      <SimpleGrid columns={2} gap={3} padding={3}>

        {pokemons.map(pokemon => <PokemonThumbnail
          onClick={() => setSelected(pokemon)}
          key={pokemon.id}
          pokemon={pokemon}
        ></PokemonThumbnail>
        )}
      </SimpleGrid>
      {selected && <PokemonDrawer pokemon={selected} onClose={() => setSelected(null)} />}
    </Stack>
  );
};

export default App;

