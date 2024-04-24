import styled from "styled-components";
import PropTypes from "prop-types";

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

function InformationLayout({ currentPlayer, isDraw, isGameEnded }) {
	const Title = styled.h3`
		font-size: 1.5rem;
		line-height: 2.25rem;
		margin: 0;
		text-align: center;
		color: #bf4f74;
	`;

	return (
		<>
			{isDraw && <Title>Ничья</Title>}

			{!isDraw && isGameEnded && <Title>{`Победа: ${currentPlayer}`}</Title>}

			{!isDraw && !isGameEnded && <Title>{`Ходит: ${currentPlayer}`}</Title>}
		</>
	);
}

export default InformationLayout;
