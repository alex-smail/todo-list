import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestUpdateTodos = (setTodos, value) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodos = (id) => {
		setIsUpdating(true);

		fetch(`${TODOS_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value.trim(),
				id: id,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTodos) => {
				setTodos((prevTodos) =>
					prevTodos.map((todo) =>
						todo.id === updatedTodos.id ? updatedTodos : todo
					)
				);
			})
			.catch((error) => console.error('Ошибка обновления задачи:', error))
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateTodos, isUpdating };
};
