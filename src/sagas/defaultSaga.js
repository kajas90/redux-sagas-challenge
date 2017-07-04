// Default redux saga
import { fork } from 'redux-saga/effects';

export function* dummySaga() {
  yield;
}

export default function* defaultSagas() {
  yield [
    fork(dummySaga)
  ];
}