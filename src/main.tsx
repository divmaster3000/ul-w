import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemeProvider } from "./theme/theme_provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
