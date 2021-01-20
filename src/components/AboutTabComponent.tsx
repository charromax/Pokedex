import { Text, Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
  titles: string[];
  data: string[];
}

const AboutTabComponent: React.FC<Props> = ({ titles, data }) => {
  return (
    <Stack 
    width= '100%'
    paddingX={2}
    paddingY={1}
    align="justify"
    backgroundColor="rgba(255,255,255, 0.2)"
    borderRadius={9999}>
      {titles.map((title, idx) => {
        return (
          <Stack direction='row' justify='space-between'>
            <Text color="gray.500" textStyle= 'bold'>{title}</Text>
            <Text color="black">{data[idx]}</Text>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default AboutTabComponent;
