import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider,Box } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (  
    <ChakraProvider>
      <Box maxWidth={"430px"} mx={"auto"}>
        <Component {...pageProps}  />
      </Box>
    </ChakraProvider>
  )
}
