import React, { useEffect, useState } from "react";
import { ToDoList, ToDoListWrapper } from "../../styled/ToDoList";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import { Loader } from "../../styled/Loader";

function ToDoListBlock() {
	const [isLoading, setIsLoading] = useState(false);
	const [toDoItems, setToDoItems] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
				.then((response) => response.json())
				.then((toDoList) => setToDoItems(toDoList))
				.finally(() => setIsLoading(false));
		}, 2000);
	}, []);

	return (
		<ToDoList>
			<ToDoListWrapper>
				{isLoading ? (
					<Loader />
				) : (
					toDoItems.map(({ id, title }) => {
						return <ToDoListItem key={id} id={id} title={title} />;
					})
				)}
			</ToDoListWrapper>
		</ToDoList>
	);
}

export default ToDoListBlock;
