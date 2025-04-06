import {
	SET_LOADING,
	SET_MODAL_OPEN,
	SET_SEARCH_VALUE,
	SET_SORTED,
} from './uiTypes';

export const initialUiState = {
	isLoading: false, // лоадер
	isModalOpen: false, // открытие модального окна для добавления задачи
	isSorted: false, // Состояние сортировки
	searchValue: '', // Текущее значение поля ввода
};

export const uiReducer = (state = initialUiState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		case SET_MODAL_OPEN:
			return {
				...state,
				isModalOpen: payload,
			};
		case SET_SORTED:
			return {
				...state,
				isSorted: payload,
			};
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: payload,
			};
		default:
			return state;
	}
};
