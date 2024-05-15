import { serverUrl } from "../constants/serverUrl";
import { getToDoItems } from "./getToDoItems";

const fetchDeleteToDoItems = (id) => {
	return fetch(`${serverUrl}/${id}`, {
		method: "DELETE",
	}).then((rawResponse) => rawResponse.json());
};

export const deleteToDoItem = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_DELETING",
		payload: true,
	});

	fetchDeleteToDoItems(id)
		.then((response) => {
			console.log("Заметка удалена, ответ сервера:", response);
		})
		.finally(() => {
			dispatch({
				type: "SET_IS_DELETING",
				payload: false,
			});

			dispatch(getToDoItems);
		});
};
