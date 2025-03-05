/* eslint-disable react/prop-types */
import { Button } from '../button/button';
import { Input } from '../input/input';
import styles from './popup-window-add-todos.module.css';

export const PopupWindowAddTodos = ({
	setIsModalOpen,
	value,
	setValue,
	requestAddTodos,
}) => {
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
				<Button onClick={() => requestAddTodos(value, setValue)}>
					Добавить
				</Button>
				<Button style="close" onClick={() => setIsModalOpen(false)}>
					╳
				</Button>
			</div>
		</>
	);
};
