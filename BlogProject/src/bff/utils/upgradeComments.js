import { getAllUsers, getComments } from "../api";

export const upgradeComments = async (stateId) => {
	const comments = await getComments(stateId);

	const users = await getAllUsers();

	return comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});
};
