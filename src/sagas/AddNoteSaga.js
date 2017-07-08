import { fork, put, call, take, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { ADD_NOTE } from 'actions/actionTypes'

import { addNoteError, addNoteSuccess } from 'actions/notesActions'


export function* addNote(note) {
  try {
    yield call(delay, 1000)
    yield put(addNoteSuccess(note));
  } catch ({ name, message, stack, status }) {
    yield put(addNoteError({ name, message, stack, status }));
  }
}


export default function* AddNoteSaga() {
  let task;
  while (true) {
    const { note } = yield take(ADD_NOTE);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(addNote, note);
  }
}
