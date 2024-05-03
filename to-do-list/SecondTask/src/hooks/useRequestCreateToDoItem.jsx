import { useState } from "react";
import { serverUrl } from "../constants/serverUrl";

export function UseRequestCreateToDoItem(refreshToDoItemsList) {
	const [isCreating, setIsCreating] = useState(false);

	const addNewToDoItem = () => {
		setIsCreating(true);

		fetch(serverUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json; charset=utf-8" },
			body: JSON.stringify({
				title: "New note title",
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Добавлена новая заметка, ответ сервера:", response);
				refreshToDoItemsList();
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, addNewToDoItem };
}
