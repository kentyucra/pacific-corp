import { createMuiTheme } from "@material-ui/core/styles";

const pacificBlue = "#0B72B9"
const pacificOrange = "#FFBA60"
export default createMuiTheme({
    palette: {
        common: {
            blue: `${pacificBlue}`,
            orange: `${pacificOrange}`
        },
        primary: {
            main: `${pacificBlue}`
        },
        secondary: {
            main: `${pacificOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        }
    }
})