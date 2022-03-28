import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { cvar } from 'styles';

const Wrapper = styled.div`
  display: flex;
  background-color: ${cvar('--color-background-variant')};
  padding: 1rem;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${cvar('--color-text-secondary')};

    input {
      cursor: inherit;
      margin-left: 1rem;
    }

    span {
      font-size: ${cvar('--font-size-5')};
      margin-left: 0.5rem;
      color: ${cvar('--color-text')};
    }
  }
`;

const Title = styled.h1`
  font-size: ${cvar('--font-size-4')};
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
        <span>US</span>
      </label>
      <label htmlFor="pt-BR">
        <input
          type="radio"
          id="pt-BR"
          value="pt-BR"
          checked={i18n.language.split('-')[0] === 'pt'}
          onChange={handleLanguageChange}
        />
        <span>BR</span>
      </label>
    </Wrapper>
  );
}

export default LanguageSwitch;
