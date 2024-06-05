import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../index";

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: nowrap;
`;

const HeaderTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const MainLogoText = styled.p`
	font-size: 3rem;
	line-height: 3.5rem;
	font-weight: 600;
`;

const UnderLogoText = styled.p`
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 600;
`;

export const Logo = () => {
	return (
		<Link to={"/"}>
			<LogoContainer>
				<Icon size={"5.5rem"} iconId={"fa-code"} />

				<HeaderTextWrapper>
					<MainLogoText>Блог</MainLogoText>
					<UnderLogoText>Веб-разработчика</UnderLogoText>
				</HeaderTextWrapper>
			</LogoContainer>
		</Link>
	);
};
