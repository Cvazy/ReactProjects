import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export function UseRequestCreateToDoItem() {
	const [isCreating, setIsCreating] = useState(false);

	const addNewToDoItem = () => {
		setIsCreating(true);

		const ToDoItemsDbRef = ref(db, "todos");

		push(ToDoItemsDbRef, {
			title: "New note title",
		})
			.then((response) => {
				console.log("Добавлена новая заметка, ответ сервера:", response);
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, addNewToDoItem };
}
