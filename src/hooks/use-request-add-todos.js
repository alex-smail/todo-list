import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestAddTodos = (value, setValue, setTodos) => {
	const [isModalOpen, setIsModalOpen] = useState(false); // открытие модального окна для добавления задачи

	const requestAddTodos = () => {
		setIsModalOpen(true);

		fetch(TODOS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value.trim(),
				id: Date.now(),
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTodos) => {
				console.log('Задача добавлена, ответ сервера:', newTodos);
				setTodos((prevTodos) => [...prevTodos, newTodos]); // Обновляем список задач
			})
			.catch((error) => console.error('Ошибка добавления задачи:', error))
			.finally(() => {
				setValue(''); // Делаем поле обратно пустым
				setIsModalOpen(false);
			});
	};

	return { isModalOpen, setIsModalOpen, requestAddTodos };
};
