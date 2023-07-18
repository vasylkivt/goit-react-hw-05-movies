import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import 'modern-normalize';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// "react-hot-toast": "^2.4.1",

// "react-loader-spinner": "^5.3.4",
