import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import { Input } from '../input/input';
import styles from './popup-window-add-todos.module.css';
import {
	addTodosAsync,
	selectValue,
	setIsModalOpen,
	setValue,
} from '../../store';

export const PopupWindowAddTodos = () => {
	const dispatch = useDispatch();
	const value = useSelector(selectValue);

	return (
		<>
			<div className={styles.opacity}></div>
			<div className={styles.modal}>
				<h2>Добавить задачу</h2>
				<Input
					placeholder="Введите название задачи"
					value={value}
					onChange={({ target }) => dispatch(setValue(target.value))}
				/>
				<Button onClick={() => dispatch(addTodosAsync(value))}>
					Добавить
				</Button>
				<Button
					style="close"
					onClick={() => dispatch(setIsModalOpen(false))}
				>
					╳
				</Button>
			</div>
		</>
	);
};
