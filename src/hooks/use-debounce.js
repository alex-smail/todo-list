import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
	// Состояние и сеттер для отложенного значения
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};
