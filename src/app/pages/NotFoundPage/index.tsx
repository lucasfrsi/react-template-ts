import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(p) => p.theme.textSecondary};

  &:hover {
    color: ${(p) => p.theme.text};
    text-decoration: underline;
  }

  &:visited {
    color: inherit;
  }
`;

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
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

export default NotFoundPage;
