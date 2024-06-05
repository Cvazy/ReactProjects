import { SERVER_URL } from "../constants";

export const deleteComment = async (commentId) =>
	fetch(`${SERVER_URL}comments/${commentId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
