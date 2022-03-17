import {
  call,
  put,
  select,
  takeLatest,
  delay,
  fork,
  SagaReturnType,
} from 'redux-saga/effects';
import pokeAPI from 'services/pokeAPI';
import { selectNameOrId } from './selectors';
import { pokemonActions } from '.';

type PokeAPIGetResponse = SagaReturnType<typeof pokeAPI.getPokemon>;

function* getPokemon() {
  yield delay(1000);

  const nameOrId: string = yield select(selectNameOrId);
  if (nameOrId.length === 0) {
    yield put(pokemonActions.pokemonError());
    return;
  }

  try {
    const query = nameOrId.trim().toLowerCase();
    const response: PokeAPIGetResponse = yield call(pokeAPI.getPokemon, query);
    yield put(pokemonActions.pokemonFound(response.data));
  } catch (err) {
    yield put(pokemonActions.pokemonError());
  }
}

function* watchGetPokemon() {
  yield takeLatest(pokemonActions.findPokemon.type, getPokemon);
}

const pokemonSagas = [fork(watchGetPokemon)];

export default pokemonSagas;
