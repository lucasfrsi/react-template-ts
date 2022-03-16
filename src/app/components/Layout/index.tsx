import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  transition: all 0.25s ease-in-out;
`;

function Layout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
