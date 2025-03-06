import { useState } from 'react';

export const useSearch = (setFilteredTodos, todos) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (query) => {
    setSearchValue(query); // Обновляем состояние searchValue

    if (!query.trim()) {
      // Если строка поиска пустая, возвращаем все задачи
      setFilteredTodos(todos);
    } else {
      // Фильтруем задачи по title
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  };

  return { searchValue, setSearchValue: handleSearch };
};