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

export const initialTodosState = {
	todos: [],
	filteredTodos: [],
	editingId: null,
	error: null,
	value: '',
};

export const todosReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;

	switch (type) {
		case READ_TODOS:
			return {
				...state,
				todos: payload,
				filteredTodos: payload,
			};
		case ADD_TODOS:
			return {
				...state,
				todos: [...state.todos, payload],
			};
		case UPDATE_TODOS:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? payload : todo
				),
			};
		case DELETE_TODOS:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		case SET_ERROR:
			return {
				...state,
				error: payload,
			};
		case SET_VALUE:
			return {
				...state,
				value: payload,
			};
		case SET_FILTRED_TODOS:
			return {
				...state,
				filteredTodos: payload,
			};
		case SET_EDITING_ID:
			return {
				...state,
				editingId: payload,
			};
		default:
			return state;
	}
};
