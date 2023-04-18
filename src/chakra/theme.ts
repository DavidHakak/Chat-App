import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
}


export const theme = extendTheme(
  { config } ,
  {
    colors :{
      brand: {
        100: "#FFEDD5",
        200: "#FED7AA",
        300: "#FDBA74",
        400: "#FB923C",
        500: "#F97316",
        600: "#EA580C",
        700: "#C2410C",
        800: "#9A3412",
        900: "#7C2D12",
      },
    },
    styles: {
      global: ()=>({
        body: {
          bg: "blackAlpha.900",
          fontFamily: "Courier New, monospace",
        }
      })
  }
})