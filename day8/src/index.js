import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store';
import { PersistGate,  } from 'redux-persist/integration/react';
import { persister } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
    <App />
      </PersistGate>
    </Provider>
);
