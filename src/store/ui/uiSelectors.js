// Получить статус загрузки
export const selectIsLoading = (state) => state.ui.isLoading;

// Получить статус модального окна
export const selectIsModalOpen = (state) => state.ui.isModalOpen;

// Получить статус сортировки
export const selectIsSorted = (state) => state.ui.isSorted;

// Получить значение поля ввода
export const selectSearchValue = (state) => state.ui.searchValue;
