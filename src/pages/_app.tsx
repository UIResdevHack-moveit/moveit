import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider,Box } from '@chakra-ui/react'
import { UserProvider } from '@/context/usercontest'


export default function App({ Component, pageProps }: AppProps) {



  return (  
    <ChakraProvider>
        <UserProvider>
          <Box maxWidth={"430px"} mx={"auto"}>
            <Component {...pageProps}  />
          </Box>
        </UserProvider>
    </ChakraProvider>
  )
}
