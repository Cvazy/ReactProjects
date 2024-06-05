import styled from "styled-components";

export const AuthFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;

	& > form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 300px;
	}
`;

export const ErrorMessageBlock = styled.div`
	background-color: #da6a6a;
	color: white;
	padding: 0.5rem;
	text-align: center;
`;

export const TextUnderAuthForm = styled.p`
	font-size: 1.125rem;
	padding-bottom: 1px;
	text-align: center;

	& > a {
		color: #297ba1;
		border-bottom: 1px solid #297ba1;

		&:hover {
			color: #124d69;
			border-bottom: 2px solid #124d69;
		}
	}
`;
