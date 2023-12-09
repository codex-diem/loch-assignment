import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F5BD9",
      light: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: grey[900],
    },
    success: {
      main: "#1EC7B6",
    },
    warning: {
      main: "#F1B746",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Inter',sans-serif;",
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.MuiToggleButtonGroup-grouped": {
            border: "none !important",
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
          },

          "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            borderRadius: "8px !important",
          },
          "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            borderRadius: "8px !important",
          },
          "&.Mui-selected": {
            backgroundColor: "transparent",
            outlineColor: "#3F5BD9 !important",
          },
          "&.Mui-selected: hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none !important",
          textTransform: "none",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          "&.MuiAlert-standardInfo": {
            backgroundColor: "#F4F6FB",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
