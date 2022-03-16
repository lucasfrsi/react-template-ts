import React from 'react';
import styled from 'styled-components';

import { themeActions } from 'styles/theme/slice';
import { saveTheme } from 'styles/theme/utils';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { useTranslation } from 'react-i18next';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { useAppDispatch, useAppSelector } from 'hooks';

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.backgroundVariant};
  padding: 1rem;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 7.5rem;
    color: ${(p) => p.theme.textSecondary};

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
  const theme = useAppSelector(selectThemeKey);
  const dispatch = useAppDispatch();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <Wrapper>
      <Title>{t('themesFeature.selectTheme')}</Title>
      <ThemeOptions>
        <label htmlFor="system">
          <input
            type="radio"
            id="system"
            value="system"
            checked={theme === 'system'}
            onChange={handleThemeChange}
          />
          <span>{t('themesFeature.system')}</span>
        </label>
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
