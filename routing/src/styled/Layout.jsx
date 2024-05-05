import styled from "styled-components";

export const Layout = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	padding-bottom: 2.5rem;
`;

export const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	max-width: 70%;
	position: relative;

	@media (max-width: 1280px) {
		max-width: 80%;
	}

	@media (max-width: 980px) {
		max-width: 85%;
	}

	@media (max-width: 767px) {
		max-width: 93%;
	}
`;
