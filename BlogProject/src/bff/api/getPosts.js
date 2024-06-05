import { SERVER_URL } from "../constants";
import { transformPost } from "../transformers";

export const getPosts = async (searchingPhrase, page, limit) =>
	await fetch(`${SERVER_URL}posts?_page=${page}&per_page=${limit}`)
		.then((rowData) => rowData.json())
		.then((loadedPostsList) => ({
			lastPage: loadedPostsList.last,
			posts: loadedPostsList.data
				.map(transformPost)
				.filter((post) =>
					post.title.toLowerCase().includes(searchingPhrase.toLowerCase()),
				),
		}));
