import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import LoginContainer from './components/Login';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={ <LoginContainer />} />
          <Route path="*" element={ <LoginContainer /> } />
          <Route exact path="/home" element={ <App />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

