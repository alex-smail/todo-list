// Получить текст задачи
export const selectValue = (state) => state.todos.value;

// Получить отфильтрованные задачи
export const selectFilteredTodos = (state) => {
	const todos = state.todos.todos;
	const searchValue = state.ui.searchValue.toLowerCase();
	const isSorted = state.ui.isSorted;

	let filtered = todos;

	if (searchValue.trim()) {
		filtered = filtered.filter(todo =>
			todo.title.toLowerCase().includes(searchValue)
		);
	}

	if (isSorted) {
		filtered = [...filtered].sort((a, b) =>
			a.title.localeCompare(b.title)
		);
	}

	return filtered;
};

// Получить id редактирования задачи
export const selectEditingTodo = (state) => state.todos.editingId;

// Получить  задачи
export const selectTodos = (state) => state.todos.todos;
