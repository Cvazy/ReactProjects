import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../../../../../../components";
import {
	CLOSE_MODAL,
	openModal,
	removeCommentAsync,
} from "../../../../../../actions";
import { useServerRequest } from "../../../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectUserRole } from "../../../../../../selectors";
import { checkAccess } from "../../../../../../utils";
import { ROLE } from "../../../../../../constants";

const CommentElementWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	width: 100%;
`;

const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.375rem;
	width: 100%;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 0.25rem;
	max-width: 522px;
`;

const CommentInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	gap: 1rem;
`;

const CommentInfoElement = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: nowrap;
`;

const TextComment = styled.p`
	font-size: 1.125rem;
	line-height: 1.375rem;
	color: black;
`;

export const CommentElement = ({
	id,
	author,
	publishedAt,
	content,
	postId,
}) => {
	const requestServer = useServerRequest();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId);

	const onConfirmFunction = () => {
		dispatch(removeCommentAsync(requestServer, postId, id));
		dispatch(CLOSE_MODAL);
	};

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: "Удалить комментарий?",
				onConfirm: onConfirmFunction,
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<CommentElementWrapper>
			<CommentContent>
				<CommentInfo>
					<CommentInfoElement>
						<Icon size={"1.25rem"} iconId={"fa-user-circle"} />

						<p>{author}</p>
					</CommentInfoElement>

					<CommentInfoElement>
						<Icon size={"1.25rem"} iconId={"fa-calendar-o"} />

						<p>{publishedAt}</p>
					</CommentInfoElement>
				</CommentInfo>

				<TextComment>{content}</TextComment>
			</CommentContent>

			{isAdminOrModerator && (
				<Icon
					size={"1.5rem"}
					iconId={"fa-trash-o"}
					className={"pointer"}
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</CommentElementWrapper>
	);
};

CommentElement.propTypes = {
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	postId: PropTypes.string.isRequired,
};
