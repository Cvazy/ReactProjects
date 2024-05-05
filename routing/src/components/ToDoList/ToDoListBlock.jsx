import React from "react";
import { Link } from "react-router-dom";
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
							<Link to={`/task/${id}`} key={id}>
								<ToDoListItem
									id={id}
									title={title}
									updateToDoItemName={updateToDoItemName}
									deleteToDoItem={deleteToDoItem}
									isDeleting={isDeleting}
								/>
							</Link>
						);
					})
				)}
			</ToDoListWrapper>
		</ToDoList>
	);
}

export default ToDoListBlock;
