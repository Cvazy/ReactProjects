import { SERVER_URL } from "../constants";

export const deletePost = async (postId) =>
	fetch(`${SERVER_URL}posts/${postId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
