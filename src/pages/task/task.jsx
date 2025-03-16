import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	useRequestUpdateTodos,
	useRequestDeleteTodos,
	useTask,
} from '../../hooks';
import { Button, Input } from '../../components';
import styles from './task.module.css';

export const Task = () => {
	const [editingId, setEditingId] = useState(null); // ID редактируемой задачи
	const [value, setValue] = useState('');
	const params = useParams();
	const { task } = useTask(params.id);

	const { id, title } = task;

	const navigate = useNavigate();

	useEffect(() => {
		if (task) {
			setValue(title);
		}
	}, [task, title]);

	const { isUpdating, requestUpdateTodos } = useRequestUpdateTodos();
	const { requestDeleteTodos, isDeleting } = useRequestDeleteTodos();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				{editingId === id ? (
					<div className={styles.edit}>
						<Input
							style="update"
							placeholder="Введите название задачи"
							value={value}
							onChange={({ target }) => setValue(target.value)}
						/>
						<Button
							style="confirm"
							onClick={() => {
								requestUpdateTodos(id, value); // Обновляем задачу
								setEditingId(null); // Сбрасываем режим редактирования
								// setValue(''); // Очищаем поле ввода
							}}
						>
							&#10003;
						</Button>
					</div>
				) : (
					<span>{value}</span>
				)}
			</div>
			<div>
				<Button
					disabled={isUpdating}
					style="update"
					onClick={() => {
						setEditingId(id); // установить ID редактируемой задачи
						// setValue(title); // заполнить поле ввода текущим значением задачи
					}}
				>
					&#9998;
				</Button>
				<Button
					disabled={isDeleting}
					style="delete"
					onClick={() => {
						requestDeleteTodos(id); // Удаляем задачу
						navigate(-1);
					}}
				>
					&#x2715;
				</Button>
			</div>
			<Button style="back" onClick={() => navigate(-1)}>
				&#10094;
			</Button>
		</div>
	);
};
