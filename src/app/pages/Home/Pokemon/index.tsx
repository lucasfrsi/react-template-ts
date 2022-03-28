import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';
import Image from 'components/Image';
import { cvar } from 'styles';
import {
  selectNameOrId,
  selectPokemon,
  selectLoading,
} from './slice/selectors';
import { pokemonActions } from './slice';

const PokemonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PokemonTopBar = styled.div`
  background-color: ${cvar('--color-background-variant')};
  padding: 0.5rem;
  display: flex;
  font-weight: 500;

  span:first-of-type {
    text-transform: capitalize;
    margin-right: auto;
  }
`;

const PokemonBottomBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PokemonStat = styled.div`
  background-color: var(--color-background-variant);
  padding: 0.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-of-type {
    margin-right: 0.5rem;
  }

  i {
    color: ${cvar('--color-text-secondary')};
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  margin: 0.5rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const PokeForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 0 0.5rem;

  input {
    background-color: transparent;
    border: 1px solid ${cvar('--color-border')};
    padding: 0.25rem 0.3rem;
    width: 100%;

    &:focus {
      outline: none;
      border: 1px solid ${cvar('--color-primary')};
    }

    &::placeholder {
      font-size: inherit;
      color: ${cvar('--color-text-secondary')};
    }
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;

  text-align: center;
  font-size: ${cvar('--font-size-5')};
  color: white;
`;

function Pokemon() {
  const { t } = useTranslation('pokemon');

  const nameOrId = useAppSelector(selectNameOrId);
  const pokemon = useAppSelector(selectPokemon);
  const isLoading = useAppSelector(selectLoading);

  const dispatch = useAppDispatch();

  const onChangeNameOrId = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(pokemonActions.changeNameOrId(event.currentTarget.value));
    dispatch(pokemonActions.findPokemon());
  };

  useEffect(() => {
    if (nameOrId && nameOrId.trim().length > 0) {
      dispatch(pokemonActions.findPokemon());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Title>PokéAPI</Title>
      <PokeForm onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder={t('inputPlaceholder')}
          value={nameOrId}
          onChange={onChangeNameOrId}
        />
        <LoadingWrapper>
          {/* eslint-disable-next-line no-nested-ternary */}
          {isLoading ? <LoadingIndicator small /> : pokemon ? '✔️' : '✖️'}
        </LoadingWrapper>
      </PokeForm>
      <PokemonBox>
        <PokemonTopBar>
          <span>{pokemon ? pokemon.name : '-'}</span>
          <span>#{pokemon ? pokemon.id : ''}</span>
        </PokemonTopBar>
        <Image
          src={
            pokemon &&
            `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getIdWith3Digits(
              pokemon.id
            )}.png`
          }
          fallbackSrc={pokemon && pokemon.sprites.front_default}
          alt={pokemon && pokemon.name}
        />
        <PokemonBottomBar>
          <PokemonStat>
            <span>{t('height')}</span>
            <span>
              {pokemon ? (
                <>
                  <b>{(pokemon.height / 10).toFixed(2)}</b>
                  <i> m</i>
                </>
              ) : (
                '-'
              )}
            </span>
          </PokemonStat>
          <PokemonStat>
            <span>{t('weight')}</span>
            <span>
              {pokemon ? (
                <>
                  <b>{(pokemon.weight / 10).toFixed(1)}</b>
                  <i> kg</i>
                </>
              ) : (
                '-'
              )}
            </span>
          </PokemonStat>
        </PokemonBottomBar>
      </PokemonBox>
    </Wrapper>
  );
}

export default Pokemon;

function getIdWith3Digits(id: number) {
  const changedId = id.toLocaleString(undefined, {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  return changedId;
}
