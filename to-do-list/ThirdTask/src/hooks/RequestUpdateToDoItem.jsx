import { ref, set } from "firebase/database";
import { db } from "../firebase";

export function RequestUpdateToDoItem() {
	const updateToDoItemName = (target, elementId, newElementName) => {
		if (target.readOnly) {
			return;
		}

		const ToDoItemsDbRef = ref(db, `todos/${elementId}`);

		set(ToDoItemsDbRef, {
			title: newElementName,
		}).then((response) => {
			console.log("Заголовок заметки обновлен, ответ сервера:", response);
		});
	};

	return {
		updateToDoItemName,
	};
}
