import { serverUrl } from "../constants/serverUrl";
import { getToDoItems } from "./getToDoItems";

const fetchCreateToDoItems = (title) => {
	return fetch(serverUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			title: title,
		}),
	}).then((rawResponse) => rawResponse.json());
};

export const createToDoItems = (title) => (dispatch) => {
	dispatch({
		type: "SET_IS_CREATING",
		payload: true,
	});

	fetchCreateToDoItems(title)
		.then((response) => {
			console.log("Добавлена новая заметка, ответ сервера:", response);
		})
		.finally(() => {
			dispatch({
				type: "SET_IS_CREATING",
				payload: false,
			});

			dispatch(getToDoItems);
		});
};
