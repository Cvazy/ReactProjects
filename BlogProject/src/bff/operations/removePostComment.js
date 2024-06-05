import { deleteComment, getPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { upgradeComments } from "../utils";

export const removePostComment = async (hash, stateId, commentId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	await deleteComment(commentId);

	const post = getPost(stateId);

	const commentsWithAuthorLogins = await upgradeComments(stateId);

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthorLogins,
		},
	};
};
