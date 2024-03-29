import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Firebase, { FirebaseContext } from './firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root"));
serviceWorker.register();
