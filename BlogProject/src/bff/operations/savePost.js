import { addPost, updatePostData } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	const savedPost =
		newPostData.id === ""
			? await addPost(newPostData)
			: await updatePostData(newPostData);

	return {
		error: null,
		res: savedPost,
	};
};
