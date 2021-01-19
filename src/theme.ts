// 1. Import the extendTheme function
import {theme} from "@chakra-ui/theme"
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc

export default extendTheme({
  colors: {
      grass: theme.colors.green,
      fire: theme.colors.red,
      water: theme.colors.blue,
      normal: theme.colors.blue,
      flying: theme.colors.blue,
      bug: theme.colors.teal,
      electric: theme.colors.purple,
      psychic: theme.colors.yellow,
      ground: theme.colors.orange,
  }
})

