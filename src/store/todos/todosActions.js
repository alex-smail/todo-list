import {
	ADD_TODOS,
	DELETE_TODOS,
	READ_TODOS,
	SET_EDITING_ID,
	SET_ERROR,
	SET_FILTRED_TODOS,
	SET_VALUE,
	UPDATE_TODOS,
} from './todosTypes';

export const setTodos = (todos) => ({ type: READ_TODOS, payload: todos });
export const addTodos = (todo) => ({ type: ADD_TODOS, payload: todo });
export const updateTodos = (todo) => ({ type: UPDATE_TODOS, payload: todo });
export const deleteTodos = (todo) => ({ type: DELETE_TODOS, payload: todo });

export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });

export const setFilteredTodos = (todos) => ({ type: SET_FILTRED_TODOS, payload: todos });
export const setEditingId = (id) => ({ type: SET_EDITING_ID, payload: id });
