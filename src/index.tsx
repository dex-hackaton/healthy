import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheet.scss";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {SessionContextProvider} from "./core/context/SessionContext";
import {initializeStore} from "./redux";
import {Provider} from "react-redux";

let store = initializeStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <SessionContextProvider>
                <App/>
            </SessionContextProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
