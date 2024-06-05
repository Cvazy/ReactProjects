import { PostContent, Comments, PostForm } from "./components";
import { useMatch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUnitPost } from "../../selectors";
import { useEffect, useLayoutEffect, useState } from "react";
import { useServerRequest } from "../../hooks";
import { LoadPostAsync, RESET_POSTS_DATA } from "../../actions";
import { Error, PrivateContent } from "../../components";
import styled from "styled-components";
import { ROLE } from "../../constants";

const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;
	padding: 0 80px;
`;

export const Post = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const postInfo = useSelector(selectUnitPost);
	const isCreating = !!useMatch("/post");
	const isEditing = !!useMatch("/post/:postId/edit");

	useLayoutEffect(() => {
		dispatch(RESET_POSTS_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(LoadPostAsync(requestServer, params.postId)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [isCreating, dispatch, params.postId, requestServer]);

	if (isLoading) {
		return;
	}

	return error ? (
		<Error error={error} />
	) : (
		<PostContainer>
			{isCreating || isEditing ? (
				<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
					<PostForm post={postInfo} />
				</PrivateContent>
			) : (
				<>
					<PostContent post={postInfo} />
					<Comments comments={postInfo.comments} />
				</>
			)}
		</PostContainer>
	);
};
