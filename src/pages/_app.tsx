import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
// import { AuthProvider } from '../components/Users/AuthContext';
// import { makeServer } from '../services/mirage';
import { QueryClientProvider, QueryClient} from 'react-query';

// if (process.env.NODE_ENV === 'development') {
//   makeServer()
// }

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>   
      <>         
        <QueryClientProvider client={queryClient}>
          <ChakraProvider resetCSS theme={theme}>
            <SidebarDrawerProvider>
              <Component {...pageProps} />
            </SidebarDrawerProvider>              
          </ChakraProvider> 
        </QueryClientProvider>        
      </>
    // </AuthProvider>
       
  )
}

export default MyApp
