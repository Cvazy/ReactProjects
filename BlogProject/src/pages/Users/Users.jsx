import { PrivateContent, H2 } from "../../components";
import { UserRow, UserTableText } from "./components";
import { useEffect, useState } from "react";
import { useServerRequest } from "../../hooks";
import { ROLE } from "../../constants";
import { checkAccess } from "../../utils";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import styled from "styled-components";

const UsersContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const UsersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`;

const UsersList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25rem;
	width: 100%;
	min-width: 570px;
`;

const TableTitlesRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-self: baseline;
	gap: 1.25rem;
	padding: 0 0.75rem;
	width: 665px;
`;

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([
			requestServer("fetchUsers"),
			requestServer("fetchRoles"),
		]).then(([usersRes, rolesRes]) => {
			if (usersRes.error || rolesRes.error) {
				setErrorMessage(usersRes.error || rolesRes.error);
				return;
			}

			setUsers(usersRes.res);
			setRoles(rolesRes.res);
		});
	}, [userRole, requestServer, shouldUpdateUserList]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		requestServer("removeUser", userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<UsersContainer>
			<UsersWrapper>
				<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
					<H2>Пользователи</H2>

					<UsersList>
						<TableTitlesRow>
							<UserTableText>Логин</UserTableText>

							<UserTableText>Дата регистрации</UserTableText>

							<UserTableText>Роль</UserTableText>
						</TableTitlesRow>

						{users.map(({ id, login, registeredAt, roleId }) => {
							return (
								<UserRow
									key={id}
									id={id}
									login={login}
									registeredAt={registeredAt}
									userRoleId={roleId}
									roles={roles.filter(
										({ id: roleId }) => +roleId !== ROLE.GUEST,
									)}
									onUserRemove={() => onUserRemove(id)}
								/>
							);
						})}
					</UsersList>
				</PrivateContent>
			</UsersWrapper>
		</UsersContainer>
	);
};
