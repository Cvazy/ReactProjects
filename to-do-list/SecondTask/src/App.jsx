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
import ModalAddTask from "./components/ModalAddTask";

export const App = () => {
	const [openSearchingBlock, setOpenSearchingBlock] = useState(false);
	const [refreshToDoListFlag, setRefreshToDoListFlag] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [sortOrder, setSortOrder] = useState("AtoZ");
	const [modalVisible, setModalVisible] = useState(false);

	const refreshToDoItemsList = () =>
		setRefreshToDoListFlag(!refreshToDoListFlag);

	const { isLoading, toDoItems } = UseRequestGetToDoItems(refreshToDoListFlag);
	const { isCreating, addNewToDoItem } =
		UseRequestCreateToDoItem(refreshToDoItemsList);
	const { updateToDoItemName } = RequestUpdateToDoItem(refreshToDoItemsList);
	const { isDeleting, deleteToDoItem } =
		UseRequestDeleteToDoItem(refreshToDoItemsList);

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
					setSearchValue={setSearchValue}
					searchValue={searchValue}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
					setModalVisible={setModalVisible}
				/>

				<ToDoListBlock
					isLoading={isLoading}
					toDoItems={filteredAndSortedItems}
					updateToDoItemName={updateToDoItemName}
					deleteToDoItem={deleteToDoItem}
					isDeleting={isDeleting}
				/>

				{modalVisible && (
					<ModalAddTask
						setModalVisible={setModalVisible}
						isCreating={isCreating}
						addNewToDoItem={addNewToDoItem}
					/>
				)}
			</LayoutWrapper>
		</Layout>
	);
};
