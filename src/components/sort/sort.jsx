import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectIsSorted,
	selectTodos,
	setFilteredTodos,
	setIsSorted,
} from '../../store';

export const Sort = () => {
	const dispatch = useDispatch();

	const isSorted = useSelector(selectIsSorted);
	const todos = useSelector(selectTodos);

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
			dispatch(setFilteredTodos(sorted));
			dispatch(setIsSorted(true));
		} else {
			dispatch(setFilteredTodos(todos));
			dispatch(setIsSorted(false));
		}
	};

	return (
		<Button style="filter" onClick={handleSort}>
			A &#8594; z
		</Button>
	);
};
