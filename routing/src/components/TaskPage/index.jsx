import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseRequestGetTask } from "../../hooks/useRequestGetTask";
import {
	ButtonWrapper,
	GreenButton,
	OrangeButton,
	TaskBlock,
	TaskInfoTitle,
	TaskInfoWrapper,
} from "../../styled/TaskBlock";

function TaskPage({ updateToDoItemName, deleteToDoItem }) {
	const { id } = useParams();
	const { taskText, setTaskText } = UseRequestGetTask(id);
	const [readOnlyState, setReadOnlyState] = useState(true);
	const [editActionState, setEditActionState] = useState(false);
	const toDoItemNameRef = useRef(null);
	const navigate = useNavigate();
	const [lastSavedValue, setLastSavedValue] = useState("");

	const focusItemName = (elementName) => {
		setReadOnlyState(false);
		setEditActionState(true);
		elementName.current.focus();
	};

	const editTaskName = () => {
		setReadOnlyState(true);
		setEditActionState(false);
		updateToDoItemName(id, toDoItemNameRef.current.value);
		setLastSavedValue(toDoItemNameRef.current.value);
	};

	const editCancel = () => {
		setReadOnlyState(true);
		setEditActionState(false);
		setTaskText(lastSavedValue);
	};

	const deleteTask = (id) => {
		deleteToDoItem(id);
		navigate("/");
	};

	const handleChangeTaskTitle = (value) => {
		setTaskText(value);
	};

	return (
		<TaskBlock>
			<TaskInfoWrapper>
				<TaskInfoTitle
					readOnly={readOnlyState}
					onChange={({ target }) => handleChangeTaskTitle(target.value)}
					value={taskText}
					ref={toDoItemNameRef}
				/>
			</TaskInfoWrapper>

			{!editActionState && (
				<ButtonWrapper>
					<GreenButton
						type={"button"}
						onClick={() => focusItemName(toDoItemNameRef)}
					>
						Редактировать
					</GreenButton>

					<OrangeButton type={"button"} onClick={() => deleteTask(id)}>
						Удалить
					</OrangeButton>
				</ButtonWrapper>
			)}

			{editActionState && (
				<ButtonWrapper>
					<GreenButton type={"button"} onClick={editTaskName}>
						Сохранить
					</GreenButton>

					<GreenButton type={"button"} onClick={editCancel}>
						Отменить
					</GreenButton>
				</ButtonWrapper>
			)}
		</TaskBlock>
	);
}

export default TaskPage;
