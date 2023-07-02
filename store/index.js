import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import globalReducer from '@store/globalSlice';
import rootSaga from '@store/sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
let middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares = [logger];
} else {
  middlewares = [];
}

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (middleware) => {
    return middleware({ thunk: false }).concat(middlewares, sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
export { store };
