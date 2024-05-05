import styled from "styled-components";

export const ToDoList = styled.div`
	width: 100%;
	margin-top: 4rem;

	@media (max-width: 767px) {
		margin-top: 3rem;
	}

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
`;

export const ToDoListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const ToDoItem = styled.div`
	width: 100%;
	background-color: #97caef;
	border-radius: 1rem;
`;

export const ToDoItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	width: 100%;
	padding: 1rem 1.5rem;

	@media (max-width: 600px) {
		gap: 1rem;
	}
`;

export const ToDoTitle = styled.p`
	font-size: 1.5rem;
	line-height: 1.75rem;
	margin: 0;
	color: white;
	text-align: left;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 100%;
	overflow: hidden;

	@media (max-width: 980px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	@media (max-width: 767px) {
		font-size: 1rem;
		line-height: 1.25rem;
	}
`;

export const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: nowrap;

	@media (max-width: 480px) {
		gap: 0.5rem;
	}
`;

export const ToDoItemAction = styled.button`
	cursor: pointer;
	border: none;
	background: none;
`;

export const ActionIcon = styled.img`
	width: 2rem;
	height: 2rem;

	@media (max-width: 980px) {
		width: 1.75rem;
		height: 1.75rem;
	}

	@media (max-width: 767px) {
		width: 1.5rem;
		height: 1.5rem;
	}
`;
