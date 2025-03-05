/* eslint-disable react/prop-types */
import { Input } from '../input/input';

export const Search = ({ searchValue, setSearchValue }) => (
	<Input
		style="search"
		type="text"
		placeholder="🔍 Поиск"
		value={searchValue}
		onChange={({ target }) => setSearchValue(target.value)}
	/>
);
