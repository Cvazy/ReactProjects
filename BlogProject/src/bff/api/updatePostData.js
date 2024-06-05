import { SERVER_URL } from "../constants";

export const updatePostData = ({ id, imageUrl, title, content }) =>
	fetch(`${SERVER_URL}posts/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((updatedPost) => updatedPost.json());
