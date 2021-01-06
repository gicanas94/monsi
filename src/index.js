import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalClasses, GlobalFonts, GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalClasses />
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
