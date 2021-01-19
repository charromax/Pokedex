import { Pokemon } from "./types";

const PAGE_SIZE = 50;

export default {
    list: (page: number): Promise<Pokemon[]> => {
        return Promise.all(
            new Array(page * PAGE_SIZE + 1)
            .fill(true)
            .map((_, index) => index)
            .slice(1)
            .map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=> res.json()
            .then((rawPokemon: any) => ({
                id: rawPokemon.id,
                name: rawPokemon.name,
                image: `https://pokeres.bastionbot.org/images/pokemon/${rawPokemon.id}.png`,
                types: rawPokemon.types.map(({type}: any) => type.name)
            })))),
            );
    }
}