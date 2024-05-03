import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export function UseRequestGetToDoItems(searchValue, sortOrder) {
	const [isLoading, setIsLoading] = useState(false);
	const [toDoItems, setToDoItems] = useState([]);

	const newToDoItemsArray = [];

	useEffect(() => {
		setIsLoading(true);

		const ToDoItemsDbRef = ref(db, "todos");

		return onValue(ToDoItemsDbRef, (snapshot) => {
			const loadedItems = snapshot.val() || [];

			setToDoItems(loadedItems);
			setIsLoading(false);
		});
	}, []);

	Object.entries(toDoItems).forEach((el) => {
		newToDoItemsArray.push({ id: el[0], ...el[1] });
	});

	const filteredAndSortedItems = [...newToDoItemsArray]
		.filter((item) => item.title.includes(searchValue))
		.sort((a, b) => {
			if (sortOrder === "AtoZ") {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		});

	return {
		isLoading,
		filteredAndSortedItems,
	};
}
