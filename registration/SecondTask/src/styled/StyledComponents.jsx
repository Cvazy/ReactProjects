import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
`;

export const Form = styled.div`
	width: 50%;
`;

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem;
	width: 100%;
	border: 2px solid #bf4f74;
	border-radius: 1rem;
`;

export const FormTitle = styled.h1`
	font-size: 2.25rem;
	line-height: 2.75rem;
	color: #bf4f74;
	margin: 0;
`;

export const FormErrorBlock = styled.p`
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 500;
	text-align: center;
	color: #d40000;
	margin: 0;
`;

export const Input = styled.input`
	font-size: 1.25rem;
	line-height: 1.5rem;
	color: #bf4f74;
	outline: none;
	border-radius: 0.75rem;
	border: 1px solid #bf4f74;
	width: 100%;
	padding: 0.75rem;
	background: none;

	&::placeholder {
		color: #bf4f74;
	}
`;

export const SubmitButton = styled.button`
	font-size: 1.25rem;
	line-height: 1.5rem;
	color: papayawhip;
	background: #bf4f74;
	border-radius: 0.75rem;
	width: 100%;
	padding: 0.75rem;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		background: #bf4f748f;
		cursor: not-allowed;
	}

	&:focus {
		background: #6d1431;
	}
`;
