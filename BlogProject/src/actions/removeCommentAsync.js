import { setPostData } from "./setPostData";

export const removeCommentAsync =
	(requestServer, stateId, id) => (dispatch) => {
		requestServer("removePostComment", stateId, id).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
