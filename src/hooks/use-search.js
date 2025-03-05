import { useState, useEffect } from 'react';
import { useDebounce } from './use-debounce';

export const useSearch = (setFilteredTodos, todos) => {
	const [searchValue, setSearchValue] = useState(''); // Текущее значение поля ввода
	const debouncedSearchTerm = useDebounce(searchValue, 400);

	useEffect(() => {
		if (debouncedSearchTerm.trim() === '') {
			// Если поле пустое, возвращаем все задачи
			setFilteredTodos(todos);
		} else {
			// Фильтруем задачи по title
			const filtered = todos.filter((todo) =>
				todo.title
					.toLowerCase()
					.includes(debouncedSearchTerm.toLowerCase())
			);
			setFilteredTodos(filtered);
		}
	}, [debouncedSearchTerm, todos, setFilteredTodos]);

	return { searchValue, setSearchValue };
};
