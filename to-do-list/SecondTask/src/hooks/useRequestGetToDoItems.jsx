import { useEffect, useState } from "react";
import { serverUrl } from "../constants/serverUrl";

export function UseRequestGetToDoItems(refreshToDoListFlag) {
	const [isLoading, setIsLoading] = useState(false);
	const [toDoItems, setToDoItems] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			fetch(serverUrl)
				.then((response) => response.json())
				.then((toDoList) => setToDoItems(toDoList))
				.finally(() => setIsLoading(false));
		}, 2000);
	}, [refreshToDoListFlag]);

	return {
		isLoading,
		toDoItems,
	};
}
