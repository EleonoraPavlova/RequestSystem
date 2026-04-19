import "./index.css";

import { HeroUIProvider } from "@heroui/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./services/store";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HeroUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HeroUIProvider>
  </BrowserRouter>
);
