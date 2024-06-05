import { SERVER_URL } from "../constants";
import { transformUser } from "../transformers";

export const getAllUsers = async () =>
	await fetch(`${SERVER_URL}users`)
		.then((rowData) => rowData.json())
		.then((loadedUsersList) => loadedUsersList.map(transformUser));
