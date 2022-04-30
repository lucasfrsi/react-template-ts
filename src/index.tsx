/**
 * index.tsx
 *
 * This is the entry file for the app, only setup and boilerplate code.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createMountElement } from 'utils';
import ThemeProvider from './styles/theme/ThemeProvider';
import store from './store';
import reportWebVitals from './reportWebVitals';

// Initialize i18n
import './locales/i18n';

// Import root app
import App from './app';

const MOUNT_NODE = createMountElement('root');
createMountElement('portal');

const root = createRoot(MOUNT_NODE);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>
);

// Hot reloadable translation json files
if (module.hot) module.hot.accept(['./locales/i18n'], () => {});

// Learn more: https://github.com/GoogleChrome/web-vitals
reportWebVitals();
