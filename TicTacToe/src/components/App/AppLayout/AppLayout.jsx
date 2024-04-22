import React from "react";
import styled from "styled-components";
import InformationContainer from "../../Information/InformationContainer/InformationContainer";
import FieldContainer from "../../Field/FieldContainer/FieldContainer";
import PropTypes from "prop-types";

AppLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	startOver: PropTypes.func,
};

function AppLayout({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	isGameEnded,
	setIsDraw,
	setIsGameEnded,
	startOver,
}) {
	const MainWrapper = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100vh;
	`;

	const Game = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		width: 50%;
	`;

	const GameTitle = styled.h1`
		font-size: 2.25rem;
		line-height: 2.75rem;
		color: #bf4f74;
		margin: 0;
	`;

	const StartOver = styled.button`
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: papayawhip;
		background-color: #bf4f74;
		border-radius: 0.75rem;
		padding: 0.75rem 1rem;
		width: 100%;

		&:hover {
			opacity: 0.8;
		}
	`;

	return (
		<MainWrapper>
			<Game>
				<GameTitle>Tic Tac Toe</GameTitle>

				<InformationContainer
					currentPlayer={currentPlayer}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
				/>

				{isGameEnded && <StartOver onClick={startOver}>Start Over</StartOver>}

				<FieldContainer
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setIsGameEnded={setIsGameEnded}
					setIsDraw={setIsDraw}
					isGameEnded={isGameEnded}
				/>
			</Game>
		</MainWrapper>
	);
}

export default AppLayout;
