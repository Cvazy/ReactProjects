import { useState } from "react";
import AppLayout from "../AppLayout/AppLayout";

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

	return (
		<AppLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
			startOver={startOver}
		/>
	);
};
