import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import Layout from '@/components/layout';
import '@styles/global.css';

function KaguStore({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}

export default KaguStore;
