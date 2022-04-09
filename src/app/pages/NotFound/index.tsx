import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cvar, STYLE } from 'styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${STYLE.font.size.extraLarge};
  }

  h2 {
    font-size: ${STYLE.font.size.large};
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: ${STYLE.font.size.small};
  text-decoration: none;
  text-transform: uppercase;
  color: ${cvar('--color-text-secondary')};

  &:hover {
    color: ${cvar('--color-text')};
    text-decoration: underline;
  }

  &:visited {
    color: inherit;
  }
`;

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <h1>4😢4</h1>
        <h2>{t('404.message')}</h2>
        <StyledLink to="/">{t('404.returnToHomePage')}</StyledLink>
      </Wrapper>
    </>
  );
}

export default NotFound;