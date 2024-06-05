import { SERVER_URL } from "../constants";
import { generateRandomDate } from "../utils";

export const addNewUser = (login, password) =>
	fetch(`${SERVER_URL}users`, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			login,
			password,
			registered_at: generateRandomDate(),
			role_id: 2,
		}),
	}).then((createdUser) => createdUser.json());
