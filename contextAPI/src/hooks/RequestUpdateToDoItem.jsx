import { serverUrl } from "../constants/serverUrl";

export function RequestUpdateToDoItem(refreshToDoItemsList) {
	const updateToDoItemName = (target, elementId, newElementName) => {
		if (target.readOnly) {
			return;
		}

		fetch(`${serverUrl}/${elementId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json; charset=utf-8" },
			body: JSON.stringify({
				title: newElementName,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Заголовок заметки обновлен, ответ сервера:", response);
				refreshToDoItemsList();
			});
	};

	return {
		updateToDoItemName,
	};
}
