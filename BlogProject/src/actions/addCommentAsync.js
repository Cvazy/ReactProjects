import { setPostData } from "./setPostData";

export const addCommentAsync =
	(requestServer, commentatorId, stateId, commentContent) => (dispatch) => {
		requestServer(
			"addPostComment",
			commentatorId,
			stateId,
			commentContent,
		).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
