import React, { useEffect } from "react";
import FieldLayout from "../FieldLayout/FieldLayout";
import PropTypes from "prop-types";

FieldContainer.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
};

function FieldContainer({
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	isDraw,
}) {
	function setCell(index) {
		setField((prevField) => {
			const newField = [...prevField];
			newField[index] = currentPlayer;
			return newField;
		});

		setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
	}

	useEffect(() => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] === "X" && field[b] === "X" && field[c] === "X") {
				setIsGameEnded(true);
				setCurrentPlayer("X");
			} else if (field[a] === "0" && field[b] === "0" && field[c] === "0") {
				setIsGameEnded(true);
				setCurrentPlayer("0");
			} else if (
				field[a] !== "X" &&
				field[b] !== "X" &&
				field[c] !== "X" &&
				field[a] !== "0" &&
				field[b] !== "0" &&
				field[c] !== "0" &&
				field.every((el) => {
					return el !== "";
				})
			) {
				setIsDraw(true);
				setIsGameEnded(true);
			}
		}
	});

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
