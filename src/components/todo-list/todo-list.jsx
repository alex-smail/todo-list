import { useContext } from 'react';
import { AppContext } from '../../providers/TodoProvider';
import styles from './todo-list.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const TodoList = () => {
	const { filteredTodos , editingId, value, setValue, updateTodos, setEditingId, deleteTodos} = useContext(AppContext);

	return (
		<ul className={styles.ulContainer}>
			{filteredTodos.map(({ id, title }) => (
				<li key={id} className={styles.liContainer}>
					{editingId === id ? (
						<div className={styles.edit}>
							<Input
								style="update"
								placeholder="Введите название задачи"
								value={value}
								onChange={({ target }) =>
									setValue(target.value)
								}
							/>
							<Button
								style="confirm"
								onClick={() => {
									updateTodos(id); // Обновляем задачу
									setEditingId(null); // Сбрасываем режим редактирования
									setValue(''); // Очищаем поле ввода
								}}
							>
								&#10003;
							</Button>
						</div>
					) : (
						<span>{title}</span>
					)}
					<div className={styles.changesBlock}>
						<Button
							style="update"
							onClick={() => {
								setEditingId(id); // установить ID редактируемой задачи
								setValue(title); // заполнить поле ввода текущим значением задачи
							}}
						>
							&#9998;
						</Button>
						<Button
							style="delete"
							onClick={
								() => deleteTodos(id) // Удаляем задачу
							}
						>
							&#x2715;
						</Button>
					</div>
				</li>
			))}
		</ul>
	);
};
