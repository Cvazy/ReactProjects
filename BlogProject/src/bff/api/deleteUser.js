import { SERVER_URL } from "../constants";

export const deleteUser = (userId) =>
	fetch(`${SERVER_URL}users/${userId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=utf-8" },
	}).then((deletedUser) => deletedUser.json());
