import * as types from './actionTypes';

export const addNote = (note) => (
  {
    type: types.ADD_NOTE,
    note
  }
);
