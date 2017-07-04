// Root saga
import { fork } from 'redux-saga/effects';

import defaultSaga from './defaultSaga';

export default function* rootSaga() {
  yield [
    fork(defaultSaga)
  ];
}