import { SERVER_URL } from "../constants";
import { transformSession } from "../transformers";

export const getSession = async (hash) =>
	fetch(`${SERVER_URL}sessions?hash=${hash}`)
		.then((rowData) => rowData.json())
		.then(
			([loadedSession]) => loadedSession && transformSession(loadedSession),
		);
