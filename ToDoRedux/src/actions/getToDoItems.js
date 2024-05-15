import { serverUrl } from "../constants/serverUrl";

const fetchGetToDoItems = () => {
	return fetch(serverUrl).then((response) => response.json());
};

export const getToDoItems = (dispatch) => {
	dispatch({
		type: "SET_LOADING",
		payload: true,
	});

	fetchGetToDoItems()
		.then((toDoList) =>
			dispatch({
				type: "GET_TODO_ITEMS",
				payload: toDoList,
			}),
		)
		.finally(() => {
			dispatch({
				type: "SET_LOADING",
				payload: false,
			});
		});
};
