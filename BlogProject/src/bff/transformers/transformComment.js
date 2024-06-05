export const transformComment = (dbComments) =>
	dbComments.map(({ id, author_id, post_id, published_at, content }) => {
		return {
			id,
			authorId: author_id,
			postId: post_id,
			publishedAt: published_at,
			content,
		};
	});
