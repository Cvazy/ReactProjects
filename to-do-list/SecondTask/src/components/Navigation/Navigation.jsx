import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";
import SortedButton from "./SortedButton";
import { ActionsWrapper } from "../../styled/ToDoList";
import ToDoActionButton from "../ToDoActionButton/ToDoActionButton";
import React from "react";

function NavigationBlock({
	openSearchingBlock,
	setOpenSearchingBlock,
	searchValue,
	setSearchValue,
	sortOrder,
	setSortOrder,
	setModalVisible,
}) {
	return (
		<Navigation>
			<NavigationWrapper>
				<Title>To Do Application</Title>

				<ActionsWrapper>
					<ToDoActionButton
						clickAction={() => setModalVisible(true)}
						src={"/assets/images/add.svg"}
					/>

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
