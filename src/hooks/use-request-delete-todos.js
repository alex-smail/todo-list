import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestDeleteTodos = (setTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodos = (id) => {
		setIsDeleting(true);

		fetch(`${TODOS_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => { setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id) ); })
			.catch((error) => console.error('Ошибка удаления задачи:', error))
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTodos, isDeleting };
};