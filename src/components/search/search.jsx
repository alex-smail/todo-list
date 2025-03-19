/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Input } from '../input/input';
import { AppContext } from '../../providers/TodoProvider';

export const Search = () => {
	const { searchValue, setSearchValue } = useContext(AppContext);
	return (
		<Input
			style="search"
			type="text"
			placeholder="🔍 Поиск"
			value={searchValue}
			onChange={({ target }) => setSearchValue(target.value)}
		/>
	);
};
