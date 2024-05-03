import React from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";

function AddNewItem({ isCreating, addNewToDoItem }) {
	return (
		<ToDoItemAction
			type={"button"}
			disabled={isCreating}
			onClick={addNewToDoItem}
		>
			<ActionIcon src={"/assets/images/add.svg"} />
		</ToDoItemAction>
	);
}

export default AddNewItem;
