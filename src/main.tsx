import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Store } from "./app/Store";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENT_ID}
    authorizationParams={{
      audience: `${import.meta.env.VITE_AUDIENCE}`,
      scope: `${import.meta.env.VITE_AUTH0_SCOPE}`,
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);
