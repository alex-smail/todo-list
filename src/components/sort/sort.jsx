/* eslint-disable react/prop-types */
import { Button } from '../button/button';

export const Sort = ({ todos, setFilteredTodos, isSorted, setIsSorted }) => {
  const handleSort = () => {
    setIsSorted((prev) => !prev);

    if (!isSorted) {
      // Сортировка по алфавиту
      const sorted = [...todos].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredTodos(sorted);
    } else {
      // Возврат к исходному порядку
      setFilteredTodos(todos);
    }
  };

  return (
    <Button style="filter" onClick={handleSort}>
      A &#8594; z
    </Button>
  );
};