import styled from "styled-components";
import InformationContainer from "../../components/Information/InformationContainer/InformationContainer";
import FieldContainer from "../../components/Field/FieldContainer/FieldContainer";
import PropTypes from "prop-types";

AppLayout.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	startOver: PropTypes.func,
	setCell: PropTypes.func,
};

function AppLayout({
	field,
	currentPlayer,
	isDraw,
	isGameEnded,
	setIsDraw,
	startOver,
	setCell,
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
					setIsDraw={setIsDraw}
					isGameEnded={isGameEnded}
					setCell={setCell}
				/>
			</Game>
		</MainWrapper>
	);
}

export default AppLayout;
