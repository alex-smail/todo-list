import { useState } from 'react';
import styles from './App.module.css';
import { Button, Sort, Input, PopupWindowAddTodos, Search } from './components';
import {
	useRequestAddTodos,
	useRequestDeleteTodos,
	useRequestGetTodos,
	useRequestUpdateTodos,
	useSearch,
} from './hooks';

const App = () => {
	const [value, setValue] = useState(''); // значение задачи
	const [editingId, setEditingId] = useState(null); // ID редактируемой задачи
	const [isSorted, setIsSorted] = useState(false); // Состояние сортировки
	const [filteredTodos, setFilteredTodos] = useState([]); // Отфильтрованный список задач

	const { todos, setTodos, isLoading } = useRequestGetTodos(setFilteredTodos);
	const { isModalOpen, setIsModalOpen, requestAddTodos } = useRequestAddTodos(
		value,
		setValue,
		setTodos
	);
	const { isUpdating, requestUpdateTodos } = useRequestUpdateTodos(
		setTodos,
		value
	);
	const { requestDeleteTodos, isDeleting } = useRequestDeleteTodos(setTodos);
	const { searchValue, setSearchValue } = useSearch(setFilteredTodos, todos);

	const todoListState = {
		setIsModalOpen,
		value,
		setValue,
		requestAddTodos,
		todos,
		setFilteredTodos,
		setSearchValue,
		searchValue,
		isSorted,
		setIsSorted,
	};

	return (
		<>
			<div className={styles.app}>
				<h1>Список задач</h1>
				<Button onClick={() => setIsModalOpen(true)}>
					Добавить задачу
				</Button>

				<div className={styles.search}>
					<Search {...todoListState} />
					<Sort {...todoListState} />
				</div>
				{/* Всплывающие окно добавления задачи */}
				{isModalOpen && <PopupWindowAddTodos {...todoListState} />}

				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					<>
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
													requestUpdateTodos(id); // Обновляем задачу
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
											disabled={isUpdating}
											style="update"
											onClick={() => {
												setEditingId(id); // установить ID редактируемой задачи
												setValue(title); // заполнить поле ввода текущим значением задачи
											}}
										>
											&#9998;
										</Button>
										<Button
											disabled={isDeleting}
											style="delete"
											onClick={
												() => requestDeleteTodos(id) // Удаляем задачу
											}
										>
											&#x2715;
										</Button>
									</div>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default App;
