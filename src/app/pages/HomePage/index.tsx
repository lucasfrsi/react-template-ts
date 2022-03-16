import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

const Wrapper = styled.div`
  border: 2px solid ${(p) => p.theme.border};
  padding: 1rem;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>

      <Wrapper>
        <LanguageSwitch />
        <ThemeSwitch />
      </Wrapper>
    </>
  );
}

export default HomePage;
