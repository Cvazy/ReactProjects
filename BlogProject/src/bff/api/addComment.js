import { SERVER_URL } from "../constants";
import { generateRandomDate } from "../utils";

export const addComment = (commentatorId, stateId, commentContent) =>
	fetch(`${SERVER_URL}comments`, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			author_id: commentatorId,
			post_id: stateId,
			published_at: generateRandomDate(),
			content: commentContent,
		}),
	});
