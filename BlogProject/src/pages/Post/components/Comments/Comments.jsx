import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { CommentElement } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserRole } from "../../../../selectors";
import { addCommentAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useParams } from "react-router-dom";
import { checkAccess } from "../../../../utils";
import { PROP_TYPES, ROLE } from "../../../../constants";

const CommentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 550px;
`;

const AddNewComment = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	width: 100%;

	& textarea {
		min-width: calc(100% - 1.75rem);
		max-width: 100%;
		min-height: 80px;
		transition-property: none;
		padding: 0.375rem;
		font-size: 1rem;
		line-height: 1.25rem;
		color: black;
		border: 1px solid black;
		border-radius: 0.25rem;
	}
`;

export const Comments = ({ comments }) => {
	const params = useParams();
	const [newCommentText, setNewCommentText] = useState("");
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const roleId = useSelector(selectUserRole);
	const requestServer = useServerRequest();
	const postId = params.postId;

	const onNewCommentAdd = (commentatorId, stateId, commentContent) => {
		dispatch(
			addCommentAsync(requestServer, commentatorId, stateId, commentContent),
		);

		setNewCommentText("");
	};

	const isGuest = checkAccess([ROLE.GUEST], roleId);

	return (
		<CommentsWrapper>
			{!isGuest && (
				<AddNewComment>
					<textarea
						typeof={"text"}
						value={newCommentText}
						placeholder={"Комментарий..."}
						onChange={({ target }) => setNewCommentText(target.value)}
					></textarea>

					<Icon
						iconId={"fa-paper-plane-o"}
						size={"1.25rem"}
						className={"pointer"}
						onClick={() => onNewCommentAdd(userId, postId, newCommentText)}
					/>
				</AddNewComment>
			)}

			{comments.map(({ id, author, publishedAt, content }) => {
				return (
					<CommentElement
						key={id}
						id={id}
						author={author}
						publishedAt={publishedAt}
						content={content}
						postId={postId}
					/>
				);
			})}
		</CommentsWrapper>
	);
};

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPES.COMMENT).isRequired,
};
