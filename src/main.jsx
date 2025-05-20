import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./lib/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <StrictMode> */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* </StrictMode> */}
    </BrowserRouter>
  </Provider>
);
