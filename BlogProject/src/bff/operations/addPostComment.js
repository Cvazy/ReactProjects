import { addComment, getPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { upgradeComments } from "../utils";

export const addPostComment = async (
	hash,
	commentatorId,
	stateId,
	commentContent,
) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	await addComment(commentatorId, stateId, commentContent);

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
