import { combineReducers } from 'redux';
import { todosReducer } from './todos/todosReducer';
import { uiReducer } from './ui/uiReducer';

export const rootReducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer,
});
