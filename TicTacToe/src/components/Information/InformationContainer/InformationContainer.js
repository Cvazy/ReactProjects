import InformationLayout from "../InformationLayout/InformationLayout";

function InformationContainer({ currentPlayer, isDraw, isGameEnded }) {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
}

export default InformationContainer;
