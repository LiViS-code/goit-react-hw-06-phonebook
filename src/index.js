import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { IconContext } from "react-icons";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/Theme";
import App from "./App";

console.log("store", store);
console.log("persistor", persistor);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: "1.3em",
          style: { verticalAlign: "middle", marginRight: "8px" },
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
