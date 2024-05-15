import { serverUrl } from "../constants/serverUrl";

const fetchUpdateToDoItems = (id, newTitle) => {
	return fetch(`${serverUrl}/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			title: newTitle,
		}),
	}).then((rawResponse) => rawResponse.json());
};

export const updateToDoItems = (target, id, newTitle) => (dispatch) => {
	if (target.readOnly) {
		return;
	}

	fetchUpdateToDoItems(id, newTitle).then((response) => {
		console.log("Заголовок заметки обновлен, ответ сервера:", response);
	});
};
