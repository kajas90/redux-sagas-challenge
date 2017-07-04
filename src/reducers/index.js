// Root reducer setup
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux';

import NotesReducer from './Notes'
const rootReducer = combineReducers({notes: NotesReducer });

export default rootReducer;
