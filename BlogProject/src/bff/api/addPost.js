import { SERVER_URL } from "../constants";
import { generateRandomDate } from "../utils";

export const addPost = ({ imageUrl, title, content }) =>
	fetch(`${SERVER_URL}posts`, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify({
			image_url: imageUrl,
			published_at: generateRandomDate(),
			title,
			content,
		}),
	}).then((createdPost) => createdPost.json());
