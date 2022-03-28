/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils';
import styled from 'styled-components';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Home = lazyLoad(
  () => import('./index'),
  <LoadingWrapper>
    <LoadingIndicator />
  </LoadingWrapper>
);
