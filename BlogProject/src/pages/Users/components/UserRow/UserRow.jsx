import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTableEllipsisText, UserTableText } from "../index";
import { Icon } from "../../../../components";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";
import { PROP_TYPES } from "../../../../constants";

const UserRowContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: nowrap;
	width: 100%;
`;

const UserWrap = styled.div`
	border: 1px solid black;
	border-radius: 0.25rem;
	width: 665px;
`;

const UserRowBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 0.25rem 0.75rem;
	gap: 1.25rem;
`;

const SelectWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;
	flex-wrap: nowrap;

	& > .user_list_select {
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: black;
		text-align: left;
		border: 1px solid black;
	}
`;

export const UserRow = ({
	id,
	login,
	registeredAt,
	userRoleId,
	roles,
	onUserRemove,
}) => {
	const requestServer = useServerRequest();

	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(target.value);
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer("updateUserRole", userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = +initialRoleId === +selectedRoleId;

	return (
		<UserRowContainer>
			<UserWrap>
				<UserRowBlock>
					<UserTableEllipsisText>{login}</UserTableEllipsisText>

					<UserTableText>{registeredAt}</UserTableText>

					<SelectWrap>
						<select
							value={selectedRoleId}
							className={"user_list_select"}
							onChange={onRoleChange}
						>
							{roles.map(({ id: roleId, name: roleName }) => {
								return (
									<option key={roleId} value={roleId}>
										{roleName}
									</option>
								);
							})}
						</select>

						<Icon
							iconId={"fa-floppy-o"}
							className={"pointer"}
							size={"1.25rem"}
							disabled={isSaveButtonDisabled}
							onClick={() => onRoleSave(id, selectedRoleId)}
						/>
					</SelectWrap>
				</UserRowBlock>
			</UserWrap>

			<Icon
				iconId={"fa-trash-o"}
				className={"pointer"}
				size={"1.25rem"}
				onClick={onUserRemove}
			/>
		</UserRowContainer>
	);
};

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	userRoleId: PROP_TYPES.ROLE.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPES.ROLE_ELEMENT).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
