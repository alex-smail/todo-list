import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.css';
import { PopupWindowAddTodos, ControlPanel, TodoList } from './components';
import { readTodos, selectIsLoading, selectIsModalOpen } from './store';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		readTodos(dispatch); // вызов асинхронной функции загрузки задач
	}, []);

	const isLoading = useSelector(selectIsLoading);
	const isModalOpen = useSelector(selectIsModalOpen);

	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<ControlPanel />
			{isLoading ? <div className={styles.loader}></div> : <TodoList />}
			{isModalOpen && <PopupWindowAddTodos />}
			{/* Всплывающие окно добавления задачи */}
		</div>
	);
};

export default App;
