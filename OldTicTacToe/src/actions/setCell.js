import { WIN_PATTERNS } from "../constans/WinPatterns";

export const setCell = (index) => ({
	type: "SET_CELL",
	payload: index,
	WIN_PATTERNS: WIN_PATTERNS,
});
