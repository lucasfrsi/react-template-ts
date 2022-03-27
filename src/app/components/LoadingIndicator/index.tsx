import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { cvar } from 'styles';

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
  `;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
  `;

const Svg = styled.svg<{ small: boolean }>`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: ${(p) => (p.small ? '1.6rem' : '3rem')};
  width: ${(p) => (p.small ? '1.6rem' : '3rem')};
  transform-origin: center;
`;

const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: ${cvar('--color-primary')};
  stroke-linecap: round;
`;

type LoadingIndicatorProps = {
  small: boolean;
};

const LoadingIndicator = ({ small }: LoadingIndicatorProps) => (
  <Svg viewBox="-24 -24 48 48" small={small}>
    <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
  </Svg>
);

LoadingIndicator.propTypes = {
  small: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  small: false,
};

export default LoadingIndicator;
