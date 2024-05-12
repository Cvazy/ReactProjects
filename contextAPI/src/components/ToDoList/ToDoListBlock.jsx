import React, { useContext } from "react";
import { ToDoList, ToDoListWrapper } from "../../styled/ToDoList";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import { Loader } from "../../styled/Loader";
import { ToDoContext } from "../../context/ToDoContext";

function ToDoListBlock() {
	const { isLoading, toDoItems } = useContext(ToDoContext);

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
