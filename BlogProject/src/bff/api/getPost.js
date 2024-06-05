import { SERVER_URL } from "../constants";
import { transformPost } from "../transformers";
import { ERRORS } from "../../constants";

export const getPost = async (postId) =>
	await fetch(`${SERVER_URL}posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404
					? ERRORS.PAGE_NOT_FOUND
					: ERRORS.SOMETHING_WENT_WRONG;

			return Promise.reject(error);
		})
		.then((rowData) => rowData.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
