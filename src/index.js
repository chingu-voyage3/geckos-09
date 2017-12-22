import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxPromise));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('.app-container'),
);
