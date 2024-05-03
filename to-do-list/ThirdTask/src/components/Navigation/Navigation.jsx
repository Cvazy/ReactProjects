import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";
import SortedButton from "./SortedButton";
import { ActionsWrapper } from "../../styled/ToDoList";
import AddNewItem from "./AddNewItem";

function NavigationBlock({
	openSearchingBlock,
	setOpenSearchingBlock,
	isCreating,
	addNewToDoItem,
	searchValue,
	setSearchValue,
	sortOrder,
	setSortOrder,
}) {
	return (
		<Navigation>
			<NavigationWrapper>
				<Title>To Do Application</Title>

				<ActionsWrapper>
					<AddNewItem isCreating={isCreating} addNewToDoItem={addNewToDoItem} />

					<SortedButton sortOrder={sortOrder} setSortOrder={setSortOrder} />

					<OpenSearch
						openSearchingBlock={openSearchingBlock}
						setOpenSearchingBlock={setOpenSearchingBlock}
					/>
				</ActionsWrapper>

				<Searching
					openSearchingBlock={openSearchingBlock}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					setOpenSearchingBlock={setOpenSearchingBlock}
				/>
			</NavigationWrapper>
		</Navigation>
	);
}

export default NavigationBlock;
