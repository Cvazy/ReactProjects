import styled from "styled-components";

export const Navigation = styled.div`
	width: 100%;
	background-color: #55bcc9;
	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;
	position: sticky;
	top: 0;
`;

export const NavigationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 1.25rem;
	width: 100%;
	position: relative;

	@media (max-width: 767px) {
		padding: 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	line-height: 2.5rem;
	font-weight: 500;
	color: white;
	margin: 0;

	@media (max-width: 980px) {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	@media (max-width: 600px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}
`;

export const OpenSearchPanel = styled.button`
	cursor: pointer;
	background: none;
	border: none;
`;

export const OpenSearchPanelImage = styled.img`
	width: 2rem;
	height: 2rem;

	@media (max-width: 767px) {
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export const SearchPanel = styled.div.attrs((props) => ({
	open: props.open || false,
}))`
	max-height: ${(props) => (props.open ? "200px" : "0")};
	overflow: hidden;
	position: absolute;
	width: 100%;
	top: 95px;
	right: 0;
	left: 0;

	@media (max-width: 980px) {
		top: 85px;
	}

	@media (max-width: 767px) {
		top: 70px;
	}

	@media (max-width: 600px) {
		top: 60px;
	}
`;

export const SearchPanelWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const SearchPanelInput = styled.input`
	width: 100%;
	border-radius: 1rem;
	background-color: #2edbd3;
	padding: 1rem 2rem 1rem 3.5rem;
	outline: none;
	border: 2px solid #55bcc9;
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 500;
	color: white;

	&::placeholder {
		color: white;
	}

	@media (max-width: 767px) {
		padding: 0.75rem 2rem 0.75rem 3rem;
	}

	@media (max-width: 600px) {
		font-size: 1rem;
		line-height: 1.25rem;
		padding: 0.5rem 2rem 0.5rem 3rem;
	}
`;

export const SearchIcon = styled.img`
	position: absolute;
	top: 22%;
	left: 1rem;
	width: 2rem;
	height: 2rem;

	@media (max-width: 767px) {
		width: 1.5rem;
		height: 1.75rem;
	}
`;
