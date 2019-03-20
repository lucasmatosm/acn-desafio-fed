import { switchReducer } from './switchReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    switchState: switchReducer,
});