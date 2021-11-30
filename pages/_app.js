import '../styles/globals.css'
import { Provider } from "next-auth/client"
import theme from "../theme";
import { ThemeProvider } from '@mui/private-theming';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
