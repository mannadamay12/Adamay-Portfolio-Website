import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { SEO } from '../utils/seo';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content={SEO.openGraph.type} />
        <meta property="og:locale" content={SEO.openGraph.locale} />
        <meta property="og:url" content={SEO.openGraph.url} />
        <meta property="og:site_name" content={SEO.openGraph.site_name} />
        <meta property="og:image" content={SEO.openGraph.images[0].url} />
        <meta property="og:image:width" content={SEO.openGraph.images[0].width} />
        <meta property="og:image:height" content={SEO.openGraph.images[0].height} />
        <meta property="og:image:alt" content={SEO.openGraph.images[0].alt} />
        <meta name="twitter:card" content={SEO.twitter.cardType} />
        <meta name="twitter:site" content={SEO.twitter.site} />
        <meta name="twitter:creator" content={SEO.twitter.handle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
      <Analytics/>
      <SpeedInsights/>
    </ThemeProvider>
  );
}

export default MyApp;