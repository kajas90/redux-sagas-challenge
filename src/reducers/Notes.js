import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const NotesReducer = (state = fromJS(initialState.notes), action) => {
  switch(action.type) {
    case types.ADD_NOTE:
      return state.set('status', 'loading');
    case types.ADD_NOTE_SUCCESS:
      return state.set('status', 'ready');
    default:
      return state;
  }
};

export default NotesReducer;
