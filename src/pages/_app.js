import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;