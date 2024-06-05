import { SERVER_URL } from "../constants";

export const getRoles = async () =>
	await fetch(`${SERVER_URL}roles`).then((rowData) => rowData.json());
