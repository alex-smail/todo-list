import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodos = (value) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodos = async (id) => {
		setIsUpdating(true);
		try {
			const todosDbRef = ref(db, `todos/${id}`);

			await set(todosDbRef, {
				title: value.trim(),
			});
		} catch (error) {
			console.error('Ошибка обновления задачи:', error);
		} finally {
			setIsUpdating(false);
		}
	};

	return { requestUpdateTodos, isUpdating };
};
