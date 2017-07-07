import { takeLatest, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GET_NOTES } from 'actions/actionTypes'

import { getNotesError, getNotesSuccess } from 'actions/notesActions'


export function* refreshNotesSaga(action) {
  try {
    const response = yield call(() => fetch('http://localhost:3000/notes').then(response => response.json()));
    yield delay(1500);
    yield put(getNotesSuccess(response));
  } catch ({ name, message, stack, status }) {
    yield put(getNotesError({ name, message, stack, status }));
  }
}


export default function* NotesSaga() {
  yield takeLatest(GET_NOTES, refreshNotesSaga);
}
