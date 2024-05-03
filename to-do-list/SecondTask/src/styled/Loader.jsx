import styled from "styled-components";

export const Loader = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(50%, 50%);
	width: 2.5rem;
	height: 2.5rem;
	border: 5px solid #3feee6;
	border-radius: 50%;
	border-left-color: transparent;
	animation: loader 1s infinite;

	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 767px) {
		width: 1.75rem;
		height: 1.75rem;
	}
`;
