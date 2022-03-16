import { all } from 'redux-saga/effects';
// import postsSagas from './posts';

export default function* rootSaga() {
  yield all([
    // ...postsSagas,
  ]);
}

// WATCHERS EXPORT
// const postsSagas = [
//   fork(watchGetPostsRequest),
//   fork(watchCreatePostRequest),
//   fork(watchDeletePostRequest),
// ];

// export default postsSagas;
