// src/index.tsx
import { ThemeProvider } from "@aws-amplify/ui-react";
import { theme } from "./theme";
import "@aws-amplify/ui-react/styles.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
