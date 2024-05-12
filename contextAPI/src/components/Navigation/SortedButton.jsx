import React, { useContext } from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";
import { NavigationContext } from "../../context/NavigationContext";

function SortedButton() {
	const { sortOrder, setSortOrder } = useContext(NavigationContext);

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
