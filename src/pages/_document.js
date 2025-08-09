import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // const basePath = process.env.NODE_ENV === 'production' ? '/Adamay-Portfolio-Website' : '';
    
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Primary Meta Tags */}
          <meta name="title" content="Adamay Mann - MERN Developer & AI Enthusiast" />
          <meta name="description" content="Portfolio of Adamay Mann, a MERN stack developer and AI enthusiast studying at NYU. Showcasing projects in web development, machine learning, and creative problem-solving." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://adamaymann.servatom.com/" />
          <meta property="og:title" content="Adamay Mann - MERN Developer & AI Enthusiast" />
          <meta property="og:description" content="Portfolio of Adamay Mann, a MERN stack developer and AI enthusiast studying at NYU." />
          <meta property="og:image" content="https://adamaymann.servatom.com/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://adamaymann.servatom.com/" />
          <meta property="twitter:title" content="Adamay Mann - MERN Developer & AI Enthusiast" />
          <meta property="twitter:description" content="Portfolio of Adamay Mann, a MERN stack developer and AI enthusiast studying at NYU." />
          <meta property="twitter:image" content="https://adamaymann.servatom.com/og-image.jpg" />
          
          {/* Preload critical images */}
          <link
            rel="preload"
            as="image"
            href="/images/hero.webp"
            type="image/webp"
          />
          
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var redirect = sessionStorage.redirect;
                delete sessionStorage.redirect;
                if (redirect && redirect != location.href) {
                  history.replaceState(null, null, redirect);
                }
              })();
            `
          }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}