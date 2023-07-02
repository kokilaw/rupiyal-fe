import { all } from 'redux-saga/effects';
import globalSaga from '@store/sagas/globalSaga';

export default function* rootSaga() {
  yield all([globalSaga()]);
}
