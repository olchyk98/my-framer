import '@/styles/globals.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ theme }>
      <ColorModeScript initialColorMode="dark" />
      <Component { ...pageProps } />
    </ChakraProvider>
  )
}
