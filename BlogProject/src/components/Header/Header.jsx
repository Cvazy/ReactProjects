import styled from "styled-components";
import { Description, Logo, ControlPanel } from "./components";

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	width: 100%;
	height: 120px;
	box-shadow: 0 -2px 17px -2px black;
`;

export const Header = () => {
	return (
		<HeaderContainer>
			<Logo />

			<Description />

			<ControlPanel />
		</HeaderContainer>
	);
};
