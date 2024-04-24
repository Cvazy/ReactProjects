import { useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import { WIN_PATTERNS } from "../../constans/WinPatterns";

export const AppContainer = () => {
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
	const [isDraw, setIsDraw] = useState(false);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState("X");

	function startOver() {
		setField(["", "", "", "", "", "", "", "", ""]);
		setIsDraw(false);
		setIsGameEnded(false);
		setCurrentPlayer("X");
	}

	function setCell(index) {
		setField((prevField) => {
			const newField = [...prevField];
			newField[index] = currentPlayer;

			for (let pattern of WIN_PATTERNS) {
				const [a, b, c] = pattern;
				if (newField[a] === "X" && newField[b] === "X" && newField[c] === "X") {
					setIsGameEnded(true);
					setCurrentPlayer("X");
				} else if (
					newField[a] === "0" &&
					newField[b] === "0" &&
					newField[c] === "0"
				) {
					setIsGameEnded(true);
					setCurrentPlayer("0");
				} else if (
					newField[a] !== "X" &&
					newField[b] !== "X" &&
					newField[c] !== "X" &&
					newField[a] !== "0" &&
					newField[b] !== "0" &&
					newField[c] !== "0" &&
					newField.every((el) => {
						return el !== "";
					})
				) {
					setIsDraw(true);
					setIsGameEnded(true);
				}
			}

			return newField;
		});

		setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
	}

	return (
		<AppLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setField={setField}
			setIsDraw={setIsDraw}
			startOver={startOver}
			setCell={setCell}
		/>
	);
};
