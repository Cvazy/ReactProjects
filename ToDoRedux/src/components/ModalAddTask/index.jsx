import {
	AddTaskForm,
	AddTaskHead,
	AddTaskInput,
	AddTaskSubmit,
	AddTaskTitle,
	ModalWindowAddTask,
	ModalWindowAddTaskWrapper,
} from "../../styled/ModalAddTask";
import ToDoActionButton from "../ToDoActionButton/ToDoActionButton";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCreatedStatus, selectModalVisible } from "../../selectors";
import { createToDoItems } from "../../actions/createToDoItem";

function ModalAddTask() {
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState("");
	const currentModalVisibleStatus = useSelector(selectModalVisible);
	const isCreating = useSelector(selectCreatedStatus);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createToDoItems(taskName));
		dispatch({
			type: "SET_MODAL_VISIBLE",
			payload: false,
		});
	};

	const setModalVisible = () => {
		dispatch({
			type: "SET_MODAL_VISIBLE",
			payload: !currentModalVisibleStatus,
		});
	};

	return (
		<ModalWindowAddTask>
			<ModalWindowAddTaskWrapper>
				<AddTaskForm onSubmit={handleSubmit}>
					<AddTaskHead>
						<AddTaskTitle>Add new task</AddTaskTitle>

						<ToDoActionButton
							disableState={isCreating}
							clickAction={setModalVisible}
							src={"/assets/images/close.svg"}
						/>
					</AddTaskHead>

					<AddTaskInput
						type={"text"}
						name={"task_name"}
						placeholder={"Task title"}
						onChange={({ target }) => setTaskName(target.value)}
					></AddTaskInput>

					<AddTaskSubmit>Submit</AddTaskSubmit>
				</AddTaskForm>
			</ModalWindowAddTaskWrapper>
		</ModalWindowAddTask>
	);
}

export default ModalAddTask;
