import { getAllUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const fetchUsers = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	const users = await getAllUsers();

	return {
		error: null,
		res: users,
	};
};
