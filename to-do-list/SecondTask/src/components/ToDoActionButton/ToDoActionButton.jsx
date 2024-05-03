import React from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";

function ToDoActionButton({ src, clickAction, disableState = false }) {
	return (
		<ToDoItemAction
			type={"button"}
			onClick={clickAction}
			disabled={disableState}
		>
			<ActionIcon src={src} />
		</ToDoItemAction>
	);
}

export default ToDoActionButton;
