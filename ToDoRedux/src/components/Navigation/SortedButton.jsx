import React from "react";
import { ActionIcon, ToDoItemAction } from "../../styled/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { selectSortOrder } from "../../selectors";

function SortedButton() {
	const dispatch = useDispatch();
	const sortOrder = useSelector(selectSortOrder);

	const setSortOrder = (newOrder) => {
		dispatch({
			type: "SET_SORTED_ORDER",
			payload: newOrder,
		});
	};

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
