import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import * as firebase from "firebase";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import firebaseConfig from "../.firebase.config";
import App from "./components/app";
import reducers from "./reducers/index";
import css from "./style/style.css";

firebase.initializeApp(firebaseConfig);

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const middleware = [ReduxPromise];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        latency: 0
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware));
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector(".app-container")
);
