import { getUnitUser, addNewUser } from "../api";
import { sessions } from "../sessions";

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUnitUser(regLogin);

	if (existedUser) {
		return {
			error: `Логин ${regLogin} уже занят`,
			res: null,
		};
	}

	const userData = await addNewUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: userData?.id,
			login: userData?.login,
			roleId: userData?.role_id,
			session: sessions.create(userData),
		},
	};
};
