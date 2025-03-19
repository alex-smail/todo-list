import { useContext } from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';
import styles from './popup-window-add-todos.module.css';
import { AppContext } from '../../providers/TodoProvider';

export const PopupWindowAddTodos = () => {
	const { setIsModalOpen, value, setValue, addTodos } =
		useContext(AppContext);

	return (
		<>
			<div className={styles.opacity}></div>
			<div className={styles.modal}>
				<h2>Добавить задачу</h2>
				<Input
					placeholder="Введите название задачи"
					value={value}
					onChange={({ target }) => setValue(target.value)}
				/>
				<Button onClick={() => addTodos(value, setValue)}>
					Добавить
				</Button>
				<Button style="close" onClick={() => setIsModalOpen(false)}>
					╳
				</Button>
			</div>
		</>
	);
};
