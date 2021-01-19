import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent
} from "@chakra-ui/react"
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";

import { Pokemon } from "../types";
import PokemonTypesLabels from "./PokemonTypesLabels";


interface Props {
  pokemon: Pokemon;
  onClose: VoidFunction;
}


const PokemonDrawer: React.FC<Props> = ({ pokemon, onClose }) => {
  return (
    <Drawer
      isOpen
      placement="right"
      size="lg"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent >
          {/* top drawer content */}
          <Stack
            backgroundColor={`${pokemon.types[0]}.300`}
            padding={6}
            color='white'
          >
            <Stack
              direction='row'
              align='center'
              justify='space-between'
              fontSize="2xl"
            >
              <ArrowBackIcon onClick={onClose} />
              <StarIcon />

            </Stack>

            <Stack direction="row">
              <Stack width='100%'>
                <Stack
                  direction='row'
                  align='baseline'
                  justify='space-between'
                >
                  <Heading textTransform = 'capitalize'>{pokemon.name}</Heading>
                  <Text>#{pokemon.id}</Text>
                </Stack>
                <PokemonTypesLabels list={pokemon.types} direction = 'row'/>
                <Image
                  src={pokemon.image}
                  marginBottom = {-12}
                  zIndex={1}
                  paddingX={6}
                ></Image>
              </Stack>
            </Stack>
          </Stack>
          {/* bottom drawer content */}
          <Stack
          backgroundColor='white'
          borderRadius={24}
          marginTop={-12}
          paddingTop={20}
          paddingX={6}
          paddingBottom={6}
          >
            <Text>Sarasa</Text>
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};


export default PokemonDrawer