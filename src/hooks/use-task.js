import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants';

export const useTask = (taskId) => {
	const [task, setTask] = useState({}); // Состояние для текущей задачи

	useEffect(() => {
		const fetchTask = async () => {
			try {
				const response = await fetch(`${TODOS_URL}/${taskId}`);
				if (!response.ok) {
					throw new Error('Задача не найдена');
				}
				const todo = await response.json();
				setTask(todo);
			} catch (error) {
				console.error('Ошибка удаления задачи:', error);
			}
		};

		fetchTask();
	}, [taskId]);

	return { task };
};
