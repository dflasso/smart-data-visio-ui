
import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

/**
 * Tema Personalizado de Material UI
 * @author dlasso
 * @see https://material-ui.com/customization/theming/
 */
const defaultTheme = createTheme({
    typography: typography,
    breakpoints: breakpoints,
    palette: palette,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: palette.secondary.contrastText
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: palette.secondary.contrastText
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: palette.secondary.contrastText
                    }
                }
            }
        }
    }
});

export default defaultTheme
