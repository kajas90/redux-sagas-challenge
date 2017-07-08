// Root saga
import { all, fork } from 'redux-saga/effects';

import NotesSaga from './NotesSaga';
import AddNoteSaga from './AddNoteSaga'

export default function* rootSaga() {
  yield all([
    fork(NotesSaga),
    fork(AddNoteSaga),
  ]);
}
