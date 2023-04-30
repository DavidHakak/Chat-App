import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'

export default function App({ Component, pageProps: {session , ...pageProps} }: AppProps) {
  console.log("session : "+ JSON.stringify(session) +"\n page props : " + JSON.stringify(pageProps)  )
  return(
      <SessionProvider session={session}>
         <ChakraProvider theme={theme}>
             <Component {...pageProps} />
         </ChakraProvider>
      </SessionProvider>
  )
};
