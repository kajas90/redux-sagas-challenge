import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const NotesReducer = (state = fromJS(initialState.notes), action) => {
  switch(action.type) {
    case types.ADD_NOTE:
      return state.set('status', 'loading');
    case types.ADD_NOTE_SUCCESS:
      return state.set('status', 'ready').updateIn(['list','data'], list => list.push({note: action.note}));
    case types.GET_NOTES:
      return state.setIn(['list','status'], 'loading');
    case types.GET_NOTES_SUCCESS:
      return state.setIn(['list','status'], 'ready').mergeIn(['list','data'],action.notes);
    default:
      return state;
  }
};

export default NotesReducer;
