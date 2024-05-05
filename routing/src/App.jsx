import { Layout, LayoutWrapper } from "./styled/Layout";
import NavigationBlock from "./components/Navigation/Navigation";
import ToDoListBlock from "./components/ToDoList/ToDoListBlock";
import React, { useState } from "react";
import {
	UseRequestCreateToDoItem,
	UseRequestGetToDoItems,
	UseRequestDeleteToDoItem,
	RequestUpdateToDoItem,
} from "./hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import TaskPage from "./components/TaskPage";
import NotFoundPage from "./components/NotFoundPage";

export const App = () => {
	const [openSearchingBlock, setOpenSearchingBlock] = useState(false);
	const [refreshToDoListFlag, setRefreshToDoListFlag] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [sortOrder, setSortOrder] = useState("AtoZ");

	const refreshToDoItemsList = () =>
		setRefreshToDoListFlag(!refreshToDoListFlag);

	const { isLoading, toDoItems } = UseRequestGetToDoItems(refreshToDoListFlag);
	const { isCreating, addNewToDoItem } =
		UseRequestCreateToDoItem(refreshToDoItemsList);
	const { updateToDoItemName } = RequestUpdateToDoItem(refreshToDoItemsList);
	const { deleteToDoItem } = UseRequestDeleteToDoItem(refreshToDoItemsList);

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
		<Layout>
			<LayoutWrapper>
				<NavigationBlock
					openSearchingBlock={openSearchingBlock}
					setOpenSearchingBlock={setOpenSearchingBlock}
					isCreating={isCreating}
					addNewToDoItem={addNewToDoItem}
					setSearchValue={setSearchValue}
					searchValue={searchValue}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>

				<Routes>
					<Route
						path={"/"}
						element={
							<ToDoListBlock
								isLoading={isLoading}
								toDoItems={filteredAndSortedItems}
							/>
						}
					/>
					<Route
						path={"/task/:id"}
						element={
							<TaskPage
								updateToDoItemName={updateToDoItemName}
								deleteToDoItem={deleteToDoItem}
							/>
						}
					/>
					<Route path={"/404"} element={<NotFoundPage />} />
					<Route path={"*"} element={<Navigate to={"/404"} />} />
				</Routes>
			</LayoutWrapper>
		</Layout>
	);
};
