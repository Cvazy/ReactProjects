import styled from "styled-components";

export const ModalWindowAddTask = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	left: 0;
`;

export const ModalWindowAddTaskWrapper = styled.div`
	background: white;
	width: 50%;
	border-radius: 0.75rem;

	@media (max-width: 1280px) {
		width: 65%;
	}

	@media (max-width: 980px) {
		width: 80%;
	}

	@media (max-width: 767px) {
		width: 85%;
	}

	@media (max-width: 480px) {
		width: 93%;
	}
`;

export const AddTaskForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	padding: 1rem;
	width: 100%;

	@media (max-width: 980px) {
		padding: 0.875rem;
		gap: 0.875rem;
	}

	@media (max-width: 480px) {
		padding: 0.5rem;
		gap: 0.5rem;
	}
`;

export const AddTaskHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
`;

export const AddTaskTitle = styled.p`
	font-size: 2rem;
	line-height: 2.5rem;
	color: #55bcc9;
	margin: 0;
	white-space: nowrap;

	@media (max-width: 980px) {
		font-size: 1.5rem;
		line-height: 1.75rem;
	}

	@media (max-width: 767px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
		line-height: 1.25rem;
	}
`;

export const AddTaskInput = styled.input`
	font-size: 1.5rem;
	line-height: 1.75rem;
	outline: none;
	color: white;
	text-align: left;
	border: none;
	background: #55bcc9;
	width: 100%;
	padding: 0.5rem 0.75rem;
	border-radius: 1rem;

	&::placeholder {
		color: white;
	}

	@media (max-width: 980px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	@media (max-width: 767px) {
		font-size: 1rem;
		line-height: 1.25rem;
	}
`;

export const AddTaskSubmit = styled.button`
	font-size: 1.5rem;
	line-height: 1.75rem;
	outline: none;
	color: white;
	text-align: center;
	border: none;
	background: #55bcc9;
	width: 100%;
	padding: 0.75rem;
	border-radius: 1rem;

	@media (max-width: 980px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	@media (max-width: 767px) {
		font-size: 1rem;
		line-height: 1.25rem;
	}
`;
