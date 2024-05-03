import React from "react";
import {
	DeleteIcon,
	DeleteToDoItem,
	ToDoItem,
	ToDoItemWrapper,
	ToDoTitle,
} from "../../../styled/ToDoList";

function ToDoListItem({ id, title }) {
	return (
		<ToDoItem>
			<ToDoItemWrapper>
				<ToDoTitle>
					{id}. {title}
				</ToDoTitle>

				<DeleteToDoItem type={"button"}>
					<DeleteIcon src={"/assets/images/remove.svg"}></DeleteIcon>
				</DeleteToDoItem>
			</ToDoItemWrapper>
		</ToDoItem>
	);
}

export default ToDoListItem;
