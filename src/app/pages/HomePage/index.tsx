import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { cvar } from 'styles';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';
import Pokemon from './Pokemon';

const Wrapper = styled.div`
  border: 2px solid ${cvar('--color-border')};
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
        <Pokemon />
        <ThemeSwitch />
      </Wrapper>
    </>
  );
}

export default HomePage;
