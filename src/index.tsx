/**
 * index.jsx
 *
 * This is the entry file for the app, only setup and boilerplate code.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './styles/theme/ThemeProvider';
import store from './store';
import createMountElement from './utils/createMountElement';
import reportWebVitals from './reportWebVitals';

// Initialize i18n
import './locales/i18n';

// Import root app
import App from './app';

const MOUNT_NODE = createMountElement('root');
createMountElement('portal');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE
);

// Hot reloadable translation json files
if (module.hot) module.hot.accept(['./locales/i18n'], () => {});

// Learn more: https://github.com/GoogleChrome/web-vitals
reportWebVitals();
