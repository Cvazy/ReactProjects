import styled from "styled-components";
import { useStore } from "../../../hooks/useStore";

function InformationLayout() {
	const Title = styled.h3`
		font-size: 1.5rem;
		line-height: 2.25rem;
		margin: 0;
		text-align: center;
		color: #bf4f74;
	`;

	const { isDraw, isGameEnded, currentPlayer } = useStore();

	return (
		<>
			{isDraw && <Title>Ничья</Title>}

			{!isDraw && isGameEnded && <Title>{`Победа: ${currentPlayer}`}</Title>}

			{!isDraw && !isGameEnded && <Title>{`Ходит: ${currentPlayer}`}</Title>}
		</>
	);
}

export default InformationLayout;
