import { useState } from "react";
import { serverUrl } from "../constants/serverUrl";

export function UseRequestDeleteToDoItem(refreshToDoItemsList) {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteToDoItem = (elementId) => {
		setIsDeleting(true);

		fetch(`${serverUrl}/${elementId}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Заметка удалена, ответ сервера:", response);
				refreshToDoItemsList();
			})
			.finally(() => setIsDeleting(false));
	};

	return {
		isDeleting,
		deleteToDoItem,
	};
}
