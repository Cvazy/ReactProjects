import { setPostData } from "./setPostData";

export const LoadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer("fetchPost", postId).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res));
		}

		return postData;
	});
