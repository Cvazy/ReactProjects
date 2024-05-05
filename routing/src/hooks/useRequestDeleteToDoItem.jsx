import { serverUrl } from "../constants/serverUrl";

export function UseRequestDeleteToDoItem(refreshToDoItemsList) {
	const deleteToDoItem = (elementId) => {
		fetch(`${serverUrl}/${elementId}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Заметка удалена, ответ сервера:", response);
				refreshToDoItemsList();
			});
	};

	return {
		deleteToDoItem,
	};
}
