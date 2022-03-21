import { all } from 'redux-saga/effects';
import pokemonSagas from 'pages/HomePage/Pokemon/slice/sagas';

export default function* rootSaga() {
  yield all([...pokemonSagas]);
}
