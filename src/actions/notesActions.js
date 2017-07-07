import * as types from './actionTypes';

export const addNote = (note) =>
  {
    type: types.ADD_NOTE,
    note
  }

export const getNotes = () => ({
  type: types.GET_NOTES
})

export const getNotesError = (error) => ({
  type: types.GET_NOTES_ERROR,
  error
})

export const getNotesSuccess = (notes) => ({
  type: types.GET_NOTES_SUCCESS,
  notes
})

