import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CustomTheme } from "./styles/muiStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={CustomTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
