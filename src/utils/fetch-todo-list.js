export const fetchTodoList = (url, setTodos, setIsLoading) => {
	fetch(url)
		.then((loadedTodos) => {
			if (!loadedTodos.ok)
				throw new Error('Ошибка в получении данных о задачах');

			return loadedTodos.json();
		})
		.then((todoList) => {
			setTodos(todoList);
		})
		.catch((error) => {
			console.error('Ошибка при загрузке данных:', error);
		})
		.finally(() => setIsLoading(false));
};
