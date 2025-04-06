/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import styles from './editing-todo.module.css';
import {
	selectEditingTodo,
	selectValue,
	setEditingId,
	setValue,
	updateTodosAsync,
} from '../../store';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const EditingTodo = ({ id, title }) => {
	const dispatch = useDispatch();

	const editingId = useSelector(selectEditingTodo);
	const value = useSelector(selectValue);

	return (
		<>
			{editingId === id ? (
				<div className={styles.edit}>
					<Input
						style="update"
						placeholder="Введите название задачи"
						value={value}
						onChange={({ target }) =>
							dispatch(setValue(target.value))
						}
					/>
					<Button
						style="confirm"
						onClick={() => {
							dispatch(updateTodosAsync(value, id)); // Обновляем задачу
							dispatch(setEditingId(null)); // Сбрасываем режим редактирования
							dispatch(setValue('')); // Очищаем поле ввода
						}}
					>
						&#10003;
					</Button>
				</div>
			) : (
				<span>{title}</span>
			)}
		</>
	);
};
