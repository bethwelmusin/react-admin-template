import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
// import { Login } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      {/* <Login /> */}
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
