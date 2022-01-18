import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import theme from "../theme";
import { ThemeProvider } from '@mui/private-theming';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
