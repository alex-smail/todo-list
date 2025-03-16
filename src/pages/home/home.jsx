/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import styles from './home.module.css';
import {
	Button,
	Sort,
	PopupWindowAddTodos,
	Search,
	TaskList,
} from '../../components';
import {
	useRequestAddTodos,
	useRequestDeleteTodos,
	useRequestGetTodos,
	useRequestUpdateTodos,
	useSearch,
} from '../../hooks';

export const Home = () => {
	const [value, setValue] = useState(''); // значение задачи
	// const [editingId, setEditingId] = useState(null); // ID редактируемой задачи
	const [isSorted, setIsSorted] = useState(false); // Состояние сортировки
	const [filteredTodos, setFilteredTodos] = useState([]); // Отфильтрованный список задач

	const { todos, setTodos, isLoading } = useRequestGetTodos(setFilteredTodos);
	const { isModalOpen, setIsModalOpen, requestAddTodos } = useRequestAddTodos(
		value,
		setValue,
		setTodos
	);
	const { searchValue, setSearchValue } = useSearch(setFilteredTodos, todos);

	useRequestUpdateTodos(setTodos, value);
	useRequestDeleteTodos(setTodos);

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
		filteredTodos,
	};

	return (
		<>
			<div className={styles.home}>
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
					<TaskList {...todoListState} />
				)}
			</div>
		</>
	);
};
