import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTodos = () => {
  const [todos, setTodos] = useState([]); // Все задачи
  const [filteredTodos, setFilteredTodos] = useState([]); // Отфильтрованные задачи
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const todosDbRef = ref(db, 'todos');

    const unsubscribe = onValue(todosDbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Преобразуем объект в массив
        const todosArray = Object.entries(data).map(([id, todo]) => ({
          id,
          ...todo,
        }));
        setTodos(todosArray);
        setFilteredTodos(todosArray);
      } else {
        setTodos([]);
        setFilteredTodos([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { todos, filteredTodos, isLoading, setFilteredTodos };
};