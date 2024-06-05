import { getPosts, getComments } from "../api";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (_, searchingPhrase, page, limit) => {
	const [{ posts, lastPage }, comments] = await Promise.all([
		getPosts(searchingPhrase, page, limit),
		getComments(),
	]);

	return {
		error: null,
		res: {
			lastPage,
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(post.id, comments),
			})),
		},
	};
};
