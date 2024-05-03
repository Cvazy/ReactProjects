import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export function UseRequestDeleteToDoItem() {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteToDoItem = (elementId) => {
		setIsDeleting(true);

		const ToDoItemsDbRef = ref(db, `todos/${elementId}`);

		remove(ToDoItemsDbRef)
			.then((response) => {
				console.log("Заметка удалена, ответ сервера:", response);
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return {
		isDeleting,
		deleteToDoItem,
	};
}
