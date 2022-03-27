import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cvar } from 'styles';

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 22.3rem;

  border: 4px solid ${cvar('--color-border-light')};
  margin: 0.5rem 0;

  img {
    width: 21.5rem;
    height: 21.5rem;
  }
`;

type ImageProps = {
  src: string | null;
  fallbackSrc: string | null;
  alt: string | null;
};

function Image({ src, fallbackSrc, alt }: ImageProps) {
  const handleOnError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    img.src = fallbackSrc!;
  };

  return (
    <ImgWrapper>
      {src ? <img src={src} onError={handleOnError} alt={alt!} /> : null}
    </ImgWrapper>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: null,
  fallbackSrc: null,
  alt: '',
};

export default Image;
