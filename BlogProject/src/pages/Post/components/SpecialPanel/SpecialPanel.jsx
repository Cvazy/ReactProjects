import PropTypes from "prop-types";
import { Icon } from "../../../../components";
import styled from "styled-components";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constants";
import { selectUserRole } from "../../../../selectors";

const SpecialPanelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0;
`;

const SpecialPanelItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: nowrap;

	& p {
		font-size: 1.125rem;
	}
`;

export const SpecialPanel = ({ id, publishedAt, editButton }) => {
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: "Удалить статью?",
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate("/"),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<SpecialPanelWrapper>
			<SpecialPanelItem>
				{publishedAt && <Icon size={"1.25rem"} iconId={"fa-calendar-o"} />}

				<p>{publishedAt}</p>
			</SpecialPanelItem>

			{isAdmin && (
				<SpecialPanelItem>
					{editButton}

					{publishedAt && (
						<Icon
							size={"1.25rem"}
							className={"pointer"}
							iconId={"fa-trash-o"}
							onClick={() => onPostRemove(id)}
						/>
					)}
				</SpecialPanelItem>
			)}
		</SpecialPanelWrapper>
	);
};

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node,
};
