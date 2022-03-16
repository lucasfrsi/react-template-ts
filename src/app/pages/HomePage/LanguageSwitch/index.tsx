import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.backgroundVariant};
  padding: 1rem;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(p) => p.theme.textSecondary};

    input {
      cursor: inherit;
      margin-left: 1rem;
    }

    span {
      font-size: 2rem;
      margin-left: 0.5rem;
      color: ${(p) => p.theme.text};
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-right: auto;
`;

function LanguageSwitch() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <Title>{t('i18nFeature.language')}</Title>
      <label htmlFor="en-US">
        <input
          type="radio"
          id="en-US"
          value="en-US"
          checked={i18n.language.split('-')[0] === 'en'}
          onChange={handleLanguageChange}
        />
        <span>🇺🇸</span>
      </label>
      <label htmlFor="pt-BR">
        <input
          type="radio"
          id="pt-BR"
          value="pt-BR"
          checked={i18n.language.split('-')[0] === 'pt'}
          onChange={handleLanguageChange}
        />
        <span>🇧🇷</span>
      </label>
    </Wrapper>
  );
}

export default LanguageSwitch;
