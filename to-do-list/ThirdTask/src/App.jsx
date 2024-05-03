import { Layout, LayoutWrapper } from "./styled/Layout";
import NavigationBlock from "./components/Navigation/Navigation";
import ToDoListBlock from "./components/ToDoList/ToDoListBlock";
import { useState } from "react";
import {
	UseRequestCreateToDoItem,
	UseRequestGetToDoItems,
	UseRequestDeleteToDoItem,
	RequestUpdateToDoItem,
} from "./hooks";

export const App = () => {
	const [openSearchingBlock, setOpenSearchingBlock] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [sortOrder, setSortOrder] = useState("AtoZ");

	const { isLoading, filteredAndSortedItems } = UseRequestGetToDoItems(
		searchValue,
		sortOrder,
	);
	const { isCreating, addNewToDoItem } = UseRequestCreateToDoItem();
	const { updateToDoItemName } = RequestUpdateToDoItem();
	const { isDeleting, deleteToDoItem } = UseRequestDeleteToDoItem();

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

				<ToDoListBlock
					isLoading={isLoading}
					toDoItems={filteredAndSortedItems}
					updateToDoItemName={updateToDoItemName}
					deleteToDoItem={deleteToDoItem}
					isDeleting={isDeleting}
				/>
			</LayoutWrapper>
		</Layout>
	);
};
