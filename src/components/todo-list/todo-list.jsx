import styles from './todo-list.module.css';
import { Button } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteTodoAsync,
	selectFilteredTodos,
	setEditingId,
	setValue,
} from '../../store';
import { EditingTodo } from '../editing-todo/editing-todo';

export const TodoList = () => {
	const dispatch = useDispatch();
	const filteredTodos = useSelector(selectFilteredTodos);

	return (
		<ul className={styles.ulContainer}>
			{filteredTodos.map(({ id, title }) => (
				<li key={id} className={styles.liContainer}>
					<EditingTodo id={id} title={title} />
					<div className={styles.changesBlock}>
						<Button
							style="update"
							onClick={() => {
								dispatch(setEditingId(id)); // установить ID редактируемой задачи
								dispatch(setValue(title)); // заполнить поле ввода текущим значением задачи
							}}
						>
							&#9998;
						</Button>
						<Button
							style="delete"
							onClick={
								() => dispatch(deleteTodoAsync(id)) // Удаляем задачу
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
