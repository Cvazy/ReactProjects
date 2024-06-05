import { SERVER_URL } from "../constants";

export const setNewUserRole = (userId, roleId) =>
	fetch(`${SERVER_URL}users/${userId}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			role_id: +roleId,
		}),
	}).then((updatedUser) => updatedUser.json());
