import React from "react";
import { ToDoList, ToDoListWrapper } from "../../styled/ToDoList";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import { Loader } from "../../styled/Loader";

function ToDoListBlock({
	isLoading,
	toDoItems,
	updateToDoItemName,
	deleteToDoItem,
	isDeleting,
}) {
	return (
		<ToDoList>
			<ToDoListWrapper>
				{isLoading ? (
					<Loader />
				) : (
					toDoItems.map(({ id, title }) => {
						return (
							<ToDoListItem
								key={id}
								id={id}
								title={title}
								updateToDoItemName={updateToDoItemName}
								deleteToDoItem={deleteToDoItem}
								isDeleting={isDeleting}
							/>
						);
					})
				)}
			</ToDoListWrapper>
		</ToDoList>
	);
}

export default ToDoListBlock;
