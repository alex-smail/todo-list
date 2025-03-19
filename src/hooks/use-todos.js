import { useEffect, useState } from 'react';
import { todosAPI } from '../api/todosAPI';
import { useSearch } from './use-search';

export const useTodos = (initialState = []) => {
	const [todos, setTodos] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false); // лоадер
	const [error, setError] = useState(null);
	const [value, setValue] = useState(''); // значение задачи
	const [editingId, setEditingId] = useState(null); // ID редактируемой задачи
	const [isSorted, setIsSorted] = useState(false); // Состояние сортировки
	const [filteredTodos, setFilteredTodos] = useState([]); // Отфильтрованный список задач

	const [isModalOpen, setIsModalOpen] = useState(false); // открытие модального окна для добавления задачи

	const { searchValue, setSearchValue } = useSearch(setFilteredTodos, todos);

	useEffect(() => {
		readTodos();
	}, []);

	const readTodos = async () => {
		setIsLoading(true);

		try {
			const todoList = await todosAPI.readAll();
			setTodos(todoList);
			setFilteredTodos(todoList);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodos = async (id) => {
		try {
			const updatedTodo = await todosAPI.update(value, id);

			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === updatedTodo.id ? updatedTodo : todo
				)
			);
		} catch (error) {
			setError(error);
		}
	};

	const addTodos = async (value) => {
		try {
			const newTodos = await todosAPI.create(value);
			setTodos((prevTodos) => [...prevTodos, newTodos]); // Обновляем список задач
		} catch (error) {
			setError(error);
		} finally {
			setValue(''); // Делаем поле обратно пустым
			setIsModalOpen(false);
		}
	};

	const deleteTodos = async (id) => {
		try {
			todosAPI.delete(id);
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
		} catch (error) {
			setError(error);
		}
	};

	return {
		todos,
		isLoading,
		error,
		updateTodos,
		isModalOpen,
		setIsModalOpen,
		addTodos,
		deleteTodos,
		filteredTodos,
		value,
		editingId,
		setEditingId,
		isSorted,
		setIsSorted,
		setValue,
		setFilteredTodos,
		searchValue,
		setSearchValue,
	};
};
