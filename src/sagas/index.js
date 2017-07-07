// Root saga
import { all, fork } from 'redux-saga/effects';

import NotesSaga from './NotesSaga';

export default function* rootSaga() {
  yield all([fork(NotesSaga)]);
}
