export const getCommentsCount = (stateId, comments = []) => {
	return comments.filter(({ postId }) => postId === stateId).length;
};
