import { SERVER_URL } from "../constants";
import { transformComment } from "../transformers";

const ALL_COMMENTS_URL = `${SERVER_URL}comments`;
const POST_COMMENTS_URL = `${SERVER_URL}comments?post_id=`;

export const getComments = async (postId) => {
	const url =
		postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	return fetch(url)
		.then((rowData) => rowData.json())
		.then(
			(loadedComments) => loadedComments && transformComment(loadedComments),
		);
};
