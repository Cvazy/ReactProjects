import styled from "styled-components";

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const DescriptionItem = styled.p`
	font-style: italic;
`;

export const Description = () => {
	return (
		<DescriptionContainer>
			<DescriptionItem>Веб технологии</DescriptionItem>

			<DescriptionItem>Написание кода</DescriptionItem>

			<DescriptionItem>Разбор ошибок</DescriptionItem>
		</DescriptionContainer>
	);
};
