import { useContext } from 'react';
import { Button } from '../button/button';
import { AppContext } from '../../providers/TodoProvider';

export const Sort = () => {
	const { todos, setFilteredTodos, isSorted, setIsSorted } =
		useContext(AppContext);

	const handleSort = () => {
		if (!isSorted) {
			const sorted = [...todos].sort((a, b) => {
				const titleA = a.title.toLowerCase();
				const titleB = b.title.toLowerCase();
				if (titleA > titleB) {
					return 1;
				}
				if (titleA < titleB) {
					return -1;
				}
				return 0;
			});

			setFilteredTodos(sorted);
			setIsSorted(true);
		} else {
			setFilteredTodos(todos);
			setIsSorted(false);
		}
	};

	return (
		<Button style="filter" onClick={handleSort}>
			A &#8594; z
		</Button>
	);
};
