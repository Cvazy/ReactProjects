import { ACTION_TYPES } from "./actionTypes";
import { server } from "../bff";

export const Logout = (session) => {
	server.logout(session);

	return {
		type: ACTION_TYPES.LOGOUT,
	};
};
