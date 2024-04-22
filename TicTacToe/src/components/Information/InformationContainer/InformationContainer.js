import InformationLayout from "../InformationLayout/InformationLayout";
import PropTypes from "prop-types";

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

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
