import { getUnitUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin, authPassword) => {
	const userData = await getUnitUser(authLogin);

	if (!userData) {
		return {
			error: `Пользователя с логином ${authLogin} не существует`,
			res: null,
		};
	}

	const { id, login, password, roleId } = userData;

	if (authPassword !== password) {
		return {
			error: "Неверный пароль",
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(userData),
		},
	};
};
