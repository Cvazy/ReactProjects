import React from "react";
import { ToDoList, ToDoListWrapper } from "../../styled/ToDoList";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import { Loader } from "../../styled/Loader";
import { useSelector } from "react-redux";
import {
	selectLoadingStatus,
	selectSearchValue,
	selectSortOrder,
	selectToDoItems,
} from "../../selectors";

function ToDoListBlock() {
	const toDoItems = useSelector(selectToDoItems);
	const sortOrder = useSelector(selectSortOrder);
	const isLoading = useSelector(selectLoadingStatus);
	const searchValue = useSelector(selectSearchValue);

	const filteredAndSortedItems = [...toDoItems]
		.filter((item) => item.title.includes(searchValue))
		.sort((a, b) => {
			if (sortOrder === "AtoZ") {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		});

	return (
		<ToDoList>
			<ToDoListWrapper>
				{isLoading ? (
					<Loader />
				) : (
					filteredAndSortedItems.map(({ id, title }) => {
						return <ToDoListItem key={id} id={id} title={title} />;
					})
				)}
			</ToDoListWrapper>
		</ToDoList>
	);
}

export default ToDoListBlock;
