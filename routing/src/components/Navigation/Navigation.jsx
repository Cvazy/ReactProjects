import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";
import SortedButton from "./SortedButton";
import { ActionsWrapper } from "../../styled/ToDoList";
import AddNewItem from "./AddNewItem";
import { Link, useMatch } from "react-router-dom";
import BackToHistory from "./BackToHistory";

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
	const urlCheckTaskPage = useMatch("/task/:id");

	const urlCheckNotFoundPage = useMatch("/404");

	return (
		<Navigation>
			<NavigationWrapper>
				<Link to={"/"}>
					<Title>To Do Application</Title>
				</Link>

				{!urlCheckTaskPage && !urlCheckNotFoundPage && (
					<ActionsWrapper>
						<AddNewItem
							isCreating={isCreating}
							addNewToDoItem={addNewToDoItem}
						/>

						<SortedButton sortOrder={sortOrder} setSortOrder={setSortOrder} />

						<OpenSearch
							openSearchingBlock={openSearchingBlock}
							setOpenSearchingBlock={setOpenSearchingBlock}
						/>
					</ActionsWrapper>
				)}

				{(urlCheckTaskPage || urlCheckNotFoundPage) && <BackToHistory />}

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
