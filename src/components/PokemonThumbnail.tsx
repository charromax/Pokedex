import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Pokemon } from "../types";
import PokemonTypesLabels from "./PokemonTypesLabels";

interface Props {
    pokemon: Pokemon;
    onClick: VoidFunction
}

const PokemonThumbnail: React.FC<Props> = ({pokemon, onClick}) => {
    return (
        <Box 
        backgroundColor = {`${pokemon.types[0]}.300`} 
        borderRadius= {12} 
        padding= {3} 
        color= "white"
        cursor= "pointer"
        onClick= {onClick}
        >
            <Stack>
                <Stack direction = "row" align="baseline" justify="space-between">
                    <Heading fontSize="xl" textTransform="capitalize">{pokemon.name}</Heading>
                    <Text>#{pokemon.id}</Text>
                </Stack>
                <Stack direction="row" justify="space-between">
                <PokemonTypesLabels list={pokemon.types} direction = "column"/>
                <Image width="100%" maxWidth="90px" src={pokemon.image} />
                </Stack>
            </Stack>
        </Box>
    );
};

export default PokemonThumbnail;