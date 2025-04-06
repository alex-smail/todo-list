import {
	SET_LOADING,
	SET_MODAL_OPEN,
	SET_SEARCH_VALUE,
	SET_SORTED,
} from './uiTypes';

export const setLoading = (loading) => ({
	type: SET_LOADING,
	payload: loading,
});
export const setIsModalOpen = (modal) => ({
	type: SET_MODAL_OPEN,
	payload: modal,
});
export const setIsSorted = (sorted) => ({ type: SET_SORTED, payload: sorted });
export const setSearchValue = (value) => ({
	type: SET_SEARCH_VALUE,
	payload: value,
});
