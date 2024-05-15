export const selectModalVisible = (state) => state.modalVisible;

export const selectToDoItems = (state) => state.toDoItems;

export const selectSortOrder = (state) => state.sortOrder;

export const selectLoadingStatus = (state) => state.isLoading;

export const selectCreatedStatus = (state) => state.isCreating;

export const selectDeletedStatus = (state) => state.isDeleting;

export const selectOpenSearchingBlockStatus = (state) =>
	state.openSearchingBlock;

export const selectSearchValue = (state) => state.searchValue;
