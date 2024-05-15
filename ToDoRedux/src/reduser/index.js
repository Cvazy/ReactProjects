const initialState = {
	toDoItems: [],
	openSearchingBlock: false,
	modalVisible: false,
	searchValue: "",
	sortOrder: "AtoZ",
	isLoading: false,
	isCreating: false,
	isDeleting: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TODO_ITEMS": {
			return {
				...state,
				toDoItems: [...action.payload],
			};
		}

		case "SET_LOADING": {
			return {
				...state,
				isLoading: action.payload,
			};
		}

		case "SET_IS_CREATING": {
			return {
				...state,
				isCreating: action.payload,
			};
		}

		case "SET_IS_DELETING": {
			return {
				...state,
				isDeleting: action.payload,
			};
		}

		case "SET_MODAL_VISIBLE": {
			return {
				...state,
				modalVisible: action.payload,
			};
		}

		case "SET_SORTED_ORDER": {
			return {
				...state,
				sortOrder: action.payload,
			};
		}

		case "SET_VISIBLE_SEARCHING": {
			return {
				...state,
				openSearchingBlock: action.payload,
			};
		}

		case "SET_SEARCH_VALUE": {
			return {
				...state,
				searchValue: action.payload,
			};
		}

		default:
			return state;
	}
};
