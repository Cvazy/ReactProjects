import styled from "styled-components";

export const TaskBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.25rem;
	width: 100%;
`;

export const TaskInfoWrapper = styled.div`
	width: 100%;
	background-color: #55bcc9;
	border-radius: 1rem;
	padding: 1.25rem 0.875rem;
`;

export const TaskInfoTitle = styled.textarea`
	font-size: 1.5rem;
	line-height: 1.75rem;
	color: white;
	text-align: left;
	min-width: 100%;
	max-width: 100%;
	min-height: 6rem;
	background: none;
	border: none;
	border-radius: 1rem;
	transition-property: none;
	outline: none;
	padding: 0;

	&:focus:not([readonly]) {
		border: 2px solid;
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

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
	width: 100%;

	@media (max-width: 767px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const GreenButton = styled.button`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	text-align: center;
	color: #55bcc9;
	padding: 1rem 1.5rem;
	background: none;
	border: 2px solid #55bcc9;
	border-radius: 0.75rem;

	&:hover {
		color: white;
		background: #55bcc9;
	}

	@media (max-width: 1280px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
		padding: 0.75rem 1.25rem;
	}

	@media (max-width: 767px) {
		font-size: 1rem;
		line-height: 1.25rem;
		width: 100%;
		padding: 0.5rem;
		border-width: 1px;
	}
`;

export const OrangeButton = styled.button`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	text-align: center;
	color: #e27d60;
	padding: 1rem 1.5rem;
	background: none;
	border: 2px solid #e27d60;
	border-radius: 0.75rem;

	&:hover {
		color: white;
		background: #e27d60;
	}

	@media (max-width: 1280px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
		padding: 0.75rem 1.25rem;
	}

	@media (max-width: 767px) {
		font-size: 1rem;
		line-height: 1.25rem;
		width: 100%;
		padding: 0.5rem;
		border-width: 1px;
	}
`;
