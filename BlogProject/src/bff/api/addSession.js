import { SERVER_URL } from "../constants";

export const addSession = (hash, user) =>
	fetch(`${SERVER_URL}sessions`, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			hash,
			user,
		}),
	});
