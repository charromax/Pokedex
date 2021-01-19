import { Stack, StackDirection, Text } from "@chakra-ui/react";
import React from "react";
import { Pokemon } from "../types";

interface Props {
    list: string[];
    direction: StackDirection;
}

const PokemonTypesLabels: React.FC<Props> = ({ list, direction }) => {
    return (
        <Stack
            direction={direction}
        >
            {list.map((type) => (
                <Text
                    key={type}
                    paddingX={2}
                    paddingY={1}
                    align="center"
                    backgroundColor="rgba(255,255,255, 0.2)"
                    borderRadius={9999}
                    width="fit-content"
                    textTransform = 'capitalize'
                >
                    {type}
                </Text>
            ))}
        </Stack>
    );
};

export default PokemonTypesLabels

