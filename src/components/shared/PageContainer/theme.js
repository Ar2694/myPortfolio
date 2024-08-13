import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(33, 33, 33, 0.4)",
      light: "rgba(224, 224, 224, 0.4)",
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
          background: `#20455C linear-gradient(
            315deg,
            hsl(212deg 83% 5%) 0%,
            hsl(212deg 83% 19%) 33%,
            hsl(212deg 88% 44%) 67%,
            hsl(212deg 96% 82%) 100%
          )`,
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