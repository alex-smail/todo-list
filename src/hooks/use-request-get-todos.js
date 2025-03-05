import { useState, useEffect } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestGetTodos = (setFilteredTodos) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false); // лоадер

	useEffect(() => {
		setIsLoading(true);

		fetch(TODOS_URL)
			.then((loadedTodos) => {
				if (!loadedTodos.ok)
					throw new Error('Ошибка в получении данных о задачах');

				return loadedTodos.json();
			})
			.then((todoList) => {
				setTodos(todoList);
				setFilteredTodos(todoList)
			})
			.catch((error) => {
				console.error('Ошибка при загрузке данных:', error);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return { todos, setTodos, isLoading };
};
