import React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styles/theme/ThemeProvider';
import { ThemeType } from 'styles/theme/themes';
import { cvar } from 'styles';
import { saveTheme } from 'styles/theme/utils';

const Wrapper = styled.div`
  background-color: ${cvar('--color-background-variant')};
  padding: 1rem;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 7.5rem;
    color: ${cvar('--color-text-secondary')};

    input {
      cursor: inherit;
    }

    span {
      margin-top: 0.3rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 1rem;
`;

const ThemeOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

function ThemeSwitch() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeType;
    setTheme(value);
    saveTheme(value);
  };

  return (
    <Wrapper>
      <Title>{t('themesFeature.selectTheme')}</Title>
      <ThemeOptions>
        <label htmlFor="light">
          <input
            type="radio"
            id="light"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          <span>{t('themesFeature.light')}</span>
        </label>
        <label htmlFor="dark">
          <input
            type="radio"
            id="dark"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          <span>{t('themesFeature.dark')}</span>
        </label>
      </ThemeOptions>
    </Wrapper>
  );
}

export default ThemeSwitch;
