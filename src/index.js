import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { store } from './Redux/store';
import { Provider } from 'react-redux';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'shards-ui/dist/css/shards.min.css';

function getLibrary(provider) {
  return new Web3(provider)
}

let persistor = persistStore(store);

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Web3ReactProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
