import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TODOS_URL } from './constants';
import { fetchTodoList } from './utils';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchTodoList(TODOS_URL, setTodos, setIsLoading);
	}, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<div className={styles.headerDsc}>
						<h1>Список задач</h1>
						<div className={styles.dsc}>
							<p>Задача</p>
							<p>Статус выполнения</p>
						</div>
					</div>
					<ul className={styles.ulContainer}>
						{todos.map((todo) => (
							<li
								key={todo.id}
								className={`${styles.liContainer} ${
									todo.completed ? styles.green : styles.red
								}`}
							>
								{todo.title}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default App;
