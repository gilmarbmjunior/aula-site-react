import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeProvider } from "./components/color-mode/index.tsx";
import { Provider } from "./components/provider/index.tsx";
import Home from "./pages/home/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <Home />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
