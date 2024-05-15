import React, { useRef, useState } from "react";
import {
	ActionsWrapper,
	ToDoItem,
	ToDoItemWrapper,
	ToDoTitle,
} from "../../../styled/ToDoList";
import ToDoActionButton from "../../ToDoActionButton/ToDoActionButton";
import { useDispatch, useSelector } from "react-redux";
import { updateToDoItems } from "../../../actions/updateToDoItem";
import { selectDeletedStatus } from "../../../selectors";
import { deleteToDoItem } from "../../../actions/deleteToDoItem";

function ToDoListItem({ id, title }) {
	const dispatch = useDispatch();
	const isDeleting = useSelector(selectDeletedStatus);

	const [itemNameValue, setItemNameValue] = useState(title);
	const [readOnlyState, setReadOnlyState] = useState(true);
	const toDoItemRef = useRef(null);
	const toDoItemNameRef = useRef(null);

	const focusItemName = (elementName) => {
		setReadOnlyState(false);
		elementName.current.focus();
	};

	const handleBlurInputName = (target, elementId, newElementName) => {
		setReadOnlyState(true);
		dispatch(updateToDoItems(target, elementId, newElementName));
	};

	const changeToDoName = (value) => {
		setItemNameValue(value);
	};

	const handleDeleteToDoItem = (id) => {
		dispatch(deleteToDoItem(id));
	};

	return (
		<ToDoItem ref={toDoItemRef}>
			<ToDoItemWrapper>
				<ToDoTitle
					ref={toDoItemNameRef}
					readOnly={readOnlyState}
					onChange={({ target }) => changeToDoName(target.value)}
					onBlur={({ target }) =>
						handleBlurInputName(target, id, itemNameValue)
					}
					value={itemNameValue}
				/>

				<ActionsWrapper>
					<ToDoActionButton
						clickAction={() => focusItemName(toDoItemNameRef)}
						src={"/assets/images/edit.svg"}
					/>

					<ToDoActionButton
						clickAction={() => handleDeleteToDoItem(id)}
						disableState={isDeleting}
						src={"/assets/images/remove.svg"}
					/>
				</ActionsWrapper>
			</ToDoItemWrapper>
		</ToDoItem>
	);
}

export default ToDoListItem;
