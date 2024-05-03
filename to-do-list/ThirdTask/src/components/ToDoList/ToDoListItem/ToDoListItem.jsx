import React, { useRef, useState } from "react";
import {
	ActionsWrapper,
	ToDoItem,
	ToDoItemWrapper,
	ToDoTitle,
} from "../../../styled/ToDoList";
import ToDoActionButton from "../../ToDoActionButton/ToDoActionButton";

function ToDoListItem({
	id,
	title,
	updateToDoItemName,
	deleteToDoItem,
	isDeleting,
}) {
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
		updateToDoItemName(target, elementId, newElementName);
	};

	const changeToDoName = (value) => {
		setItemNameValue(value);
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
						clickAction={() => deleteToDoItem(id)}
						disableState={isDeleting}
						src={"/assets/images/remove.svg"}
					/>
				</ActionsWrapper>
			</ToDoItemWrapper>
		</ToDoItem>
	);
}

export default ToDoListItem;
