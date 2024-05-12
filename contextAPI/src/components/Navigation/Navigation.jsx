import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";
import SortedButton from "./SortedButton";
import { ActionsWrapper } from "../../styled/ToDoList";
import ToDoActionButton from "../ToDoActionButton/ToDoActionButton";
import React, { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";

function NavigationBlock() {
	const { setModalVisible } = useContext(NavigationContext);

	return (
		<Navigation>
			<NavigationWrapper>
				<Title>To Do Application</Title>

				<ActionsWrapper>
					<ToDoActionButton
						clickAction={() => setModalVisible(true)}
						src={"/assets/images/add.svg"}
					/>

					<SortedButton />

					<OpenSearch />
				</ActionsWrapper>

				<Searching />
			</NavigationWrapper>
		</Navigation>
	);
}

export default NavigationBlock;
