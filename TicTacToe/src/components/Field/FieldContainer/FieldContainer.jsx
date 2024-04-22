import React, { useEffect } from "react";
import FieldLayout from "../FieldLayout/FieldLayout";

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

	function checkWin(field) {
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
			} else {
				if (
					field.every((el) => {
						return el !== "";
					})
				) {
					setIsDraw(true);
					setIsGameEnded(true);
				}
			}
		}
	}

	useEffect(() => {
		checkWin(field);
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
