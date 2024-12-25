import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme' // Update the import path

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp 