import styled from "styled-components";
import { useSelector } from "react-redux";
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from "../../../selectors";

function InformationLayout() {
	const Title = styled.h3`
		font-size: 1.5rem;
		line-height: 2.25rem;
		margin: 0;
		text-align: center;
		color: #bf4f74;
	`;

	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	return (
		<>
			{isDraw && <Title>Ничья</Title>}

			{!isDraw && isGameEnded && <Title>{`Победа: ${currentPlayer}`}</Title>}

			{!isDraw && !isGameEnded && <Title>{`Ходит: ${currentPlayer}`}</Title>}
		</>
	);
}

export default InformationLayout;
