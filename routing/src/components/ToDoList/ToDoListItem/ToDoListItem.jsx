import { ToDoItem, ToDoItemWrapper, ToDoTitle } from "../../../styled/ToDoList";

function ToDoListItem({ title, updateToDoItemName }) {
	return (
		<ToDoItem>
			<ToDoItemWrapper>
				<ToDoTitle>{title}</ToDoTitle>
			</ToDoItemWrapper>
		</ToDoItem>
	);
}

export default ToDoListItem;
