import { SERVER_URL } from "../constants";

export const deleteSession = async (sessionId) =>
	fetch(`${SERVER_URL}sessions/${sessionId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
