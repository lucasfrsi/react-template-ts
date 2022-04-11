/**
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g., Layout component
 * and routes)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from 'styles';
import favicon from 'assets/images/favicon.png';

function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
        <link rel="icon" href={favicon} />
      </Helmet>

      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<p>Hello World!</p>} />
        <Route path="*" element={<p>404 - Not Found =/</p>} />
      </Routes>
      {/* </Layout> */}

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
