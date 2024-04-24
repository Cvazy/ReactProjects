import FieldLayout from "../FieldLayout/FieldLayout";
import PropTypes from "prop-types";

FieldContainer.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setCell: PropTypes.func,
};

function FieldContainer({ field, isGameEnded, setIsDraw, isDraw, setCell }) {
	return (
		<FieldLayout
			field={field}
			setCell={setCell}
			isGameEnded={isGameEnded}
			setIsDraw={setIsDraw}
			isDraw={isDraw}
		/>
	);
}

export default FieldContainer;
