import { todosAPI } from '../../api/todosAPI';
import { setIsModalOpen, setLoading } from '../ui/uiActions';
import {
	setError,
	addTodos,
	setTodos,
	updateTodos,
	deleteTodos,
	setValue,
	setFilteredTodos,
} from './todosActions';

export const readTodos = async (dispatch) => {
	dispatch(setLoading(true));

	try {
		const todoList = await todosAPI.readAll();
		dispatch(setTodos(todoList));
		dispatch(setFilteredTodos(todoList));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(setLoading(false));
	}
};

export const addTodosAsync = (value) => async (dispatch) => {
	try {
		const newTodos = await todosAPI.create(value);
		dispatch(addTodos(newTodos)); // Обновляем список задач
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(setValue('')); // Делаем поле обратно пустым
		dispatch(setIsModalOpen(false));
	}
};

export const updateTodosAsync = (value, id) => async (dispatch) => {
	try {
		const updatedTodo = await todosAPI.update(value, id);
		dispatch(updateTodos(updatedTodo));
	} catch (error) {
		dispatch(setError(error));
	}
};

export const deleteTodoAsync = (id) => async (dispatch) => {
	try {
		await todosAPI.delete(id);
		dispatch(deleteTodos(id));
	} catch (error) {
		dispatch(setError(error));
	}
};
