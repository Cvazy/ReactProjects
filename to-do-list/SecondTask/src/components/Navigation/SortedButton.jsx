import React from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";

function SortedButton({ sortOrder, setSortOrder }) {
	return (
		<ToDoItemAction
			type={"button"}
			onClick={() => setSortOrder(sortOrder === "AtoZ" ? "ZtoA" : "AtoZ")}
		>
			<ActionIcon
				style={{ display: sortOrder === "AtoZ" ? "block" : "none" }}
				src={"/assets/images/sort_from_a_to_z.svg"}
			/>

			<ActionIcon
				style={{ display: sortOrder === "ZtoA" ? "block" : "none" }}
				src={"/assets/images/sort_from_z_to_a.svg"}
			/>
		</ToDoItemAction>
	);
}

export default SortedButton;
