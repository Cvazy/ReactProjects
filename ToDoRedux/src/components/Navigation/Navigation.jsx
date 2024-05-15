import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";
import SortedButton from "./SortedButton";
import { ActionsWrapper } from "../../styled/ToDoList";
import ToDoActionButton from "../ToDoActionButton/ToDoActionButton";
import React from "react";
import { useDispatch } from "react-redux";

function NavigationBlock() {
	const dispatch = useDispatch();

	const setModalVisible = () => {
		dispatch({
			type: "SET_MODAL_VISIBLE",
			payload: true,
		});
	};

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
