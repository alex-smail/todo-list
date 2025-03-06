import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTodos = (value, setValue) => {
	const [isModalOpen, setIsModalOpen] = useState(false); // открытие модального окна для добавления задачи

	const requestAddTodos = async () => {
		setIsModalOpen(true);
		try {
			const todosDbRef = ref(db, 'todos');

			await push(todosDbRef, {
				title: value.trim(),
			});
			console.log('Задача добавлена, ответ сервера:', todosDbRef);
		} catch (error) {
			console.error('Ошибка добавления задачи:', error);
		} finally {
			setValue(''); // Делаем поле обратно пустым
			setIsModalOpen(false);
		}
	};

	return { isModalOpen, setIsModalOpen, requestAddTodos };
};
