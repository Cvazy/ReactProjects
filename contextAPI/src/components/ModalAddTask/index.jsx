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

function ModalAddTask({ setModalVisible, isCreating, addNewToDoItem }) {
	const [taskName, setTaskName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addNewToDoItem(taskName);
		setModalVisible(false);
	};

	return (
		<ModalWindowAddTask>
			<ModalWindowAddTaskWrapper>
				<AddTaskForm onSubmit={handleSubmit}>
					<AddTaskHead>
						<AddTaskTitle>Add new task</AddTaskTitle>

						<ToDoActionButton
							disableState={isCreating}
							clickAction={(prev) => setModalVisible(!prev)}
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
