import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../input/input';
import { selectSearchValue, setSearchValue } from '../../store';

export const Search = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector(selectSearchValue);

	return (
		<Input
			style="search"
			type="text"
			placeholder="🔍 Поиск"
			value={searchValue}
			onChange={({ target }) => dispatch(setSearchValue(target.value))}
		/>
	);
};
