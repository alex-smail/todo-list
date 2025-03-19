import { useContext } from 'react';
import styles from './App.module.css';
import { PopupWindowAddTodos, ControlPanel, TodoList } from './components';
import { AppContext } from './providers/TodoProvider';

const App = () => {
	const { isLoading, isModalOpen } = useContext(AppContext);

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
