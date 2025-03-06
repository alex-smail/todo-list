import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodos = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodos = async (id) => {
		setIsDeleting(true);

		try {
			const todosDbRef = ref(db, `todos/${id}`);
			await remove(todosDbRef);
		} catch (error) {
			console.error('Ошибка удаления задачи:', error)
		} finally {
			setIsDeleting(false)
		}
	};

	return { requestDeleteTodos, isDeleting };
};
