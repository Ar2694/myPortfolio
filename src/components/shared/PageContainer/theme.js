import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(33, 33, 33, 0.5)",
      light: "rgba(224, 224, 224, 0.5)",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: grey[500],
      light: grey[700],
      dark: grey[300],
      contrastText: "#FFFFFF"
    },
    action: {
      active: "rgba(0, 0, 0, 0.56)",
      hover: "rgba(33, 33, 33, 0.1)",
      selected: "rgba(0, 0, 0, 0.1)",
      focus: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.38)",
      disabledBackground: "rgba(0, 0, 0, 0.12)"
    }
  },
  shape: {
    borderRadius: 5
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#20455C linear-gradient(to right top, #020c11, #08161c, #0a1d28, #0a2534, #092d40, #193d53, #284e66, #375f7a, #577e9a, #779fba, #98c1dc, #bae4ff);",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "#FFFFFF"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "Capitalize",
        }

      }
    }
  }

});


export default theme;