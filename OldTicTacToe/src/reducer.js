const initialState = {
	field: ["", "", "", "", "", "", "", "", ""],
	isDraw: false,
	isGameEnded: false,
	currentPlayer: "X",
};

export const AppReducer = (state = initialState, action) => {
	const { type, payload, WIN_PATTERNS } = action;

	switch (type) {
		case "START_OVER": {
			return initialState;
		}

		case "SET_CELL": {
			const newField = [...state.field];
			newField[payload] = state.currentPlayer;

			let isDraw = state.isDraw;
			let isGameEnded = state.isGameEnded;
			let currentPlayer = state.currentPlayer;

			for (let pattern of WIN_PATTERNS) {
				const [a, b, c] = pattern;
				if (newField[a] === "X" && newField[b] === "X" && newField[c] === "X") {
					isGameEnded = true;
					currentPlayer = "X";
				} else if (
					newField[a] === "0" &&
					newField[b] === "0" &&
					newField[c] === "0"
				) {
					isGameEnded = true;
					currentPlayer = "0";
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
					isDraw = true;
					isGameEnded = true;
				}
			}

			if (!isGameEnded && newField.every((el) => el !== "")) {
				isDraw = true;
				isGameEnded = true;
			}

			if (!isGameEnded) {
				currentPlayer = currentPlayer === "X" ? "0" : "X";
			}

			return {
				field: newField,
				isDraw,
				isGameEnded,
				currentPlayer,
			};
		}

		default:
			return state;
	}
};
