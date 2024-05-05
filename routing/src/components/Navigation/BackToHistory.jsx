import React from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";
import { useNavigate } from "react-router-dom";

function BackToHistory() {
	const navigate = useNavigate();

	return (
		<ToDoItemAction type={"button"} onClick={() => navigate(-1)}>
			<ActionIcon src={"/assets/images/back.svg"} />
		</ToDoItemAction>
	);
}

export default BackToHistory;
