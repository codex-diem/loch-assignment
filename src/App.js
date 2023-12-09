import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Containers from "./containers";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* //Page Level routes goes here */}
      <Containers />
    </ThemeProvider>
  );
}

export default App;
