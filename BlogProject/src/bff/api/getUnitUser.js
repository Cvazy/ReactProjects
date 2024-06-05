import { SERVER_URL } from "../constants";
import { transformUser } from "../transformers";

export const getUnitUser = async (loginToFind) =>
	fetch(`${SERVER_URL}users?login=${loginToFind}`)
		.then((rowData) => rowData.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
