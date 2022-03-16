import { configureStore, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

function configureAppStore() {
  const middlewares: (SagaMiddleware | Middleware)[] = [];

  // Redux-Saga Middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // Redux-Logger Middleware
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    const loggerMiddleware = createLogger({
      collapsed: true,
    });
    middlewares.push(loggerMiddleware);
  }

  // Redux Store Configuration
  const store = configureStore({
    reducer: rootReducer,
    // Disable thunk, but allow immutability and serializability check in dev mode
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureAppStore();

export default store;
export type AppDispatch = typeof store.dispatch;
