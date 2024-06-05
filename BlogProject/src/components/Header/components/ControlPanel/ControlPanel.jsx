import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../Icon/Icon";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../../../MainButton/MainButton";
import { ROLE } from "../../../../constants";
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from "../../../../selectors";
import { Logout } from "../../../../actions";
import styled from "styled-components";
import { checkAccess } from "../../../../utils";

const ControlPanelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.375rem;
`;

const ExitBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: nowrap;
	cursor: pointer;
`;

const UserNickName = styled.p`
	font-weight: bold;
`;

const HeaderActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.675rem;
	flex-wrap: nowrap;
`;

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const onLogout = () => {
		dispatch(Logout(session));
		sessionStorage.removeItem("userData");
	};

	return (
		<ControlPanelWrapper>
			{roleId === ROLE.GUEST ? (
				<MainButton type={"button"} propWidth={"85px"} propHeight={"30px"}>
					<Link to={"/login"}>Войти</Link>
				</MainButton>
			) : (
				<ExitBlock role={"button"}>
					<UserNickName>{login}</UserNickName>

					<div className={"pointer"} onClick={onLogout}>
						<Icon size={"1.25rem"} iconId={"fa-sign-out"} />
					</div>
				</ExitBlock>
			)}

			<HeaderActionsWrapper>
				<div className={"pointer"} onClick={() => navigate(-1)}>
					<Icon size={"1.25rem"} iconId={"fa-backward"} />
				</div>

				{isAdmin && (
					<>
						<Link to={"/post"}>
							<Icon size={"1.25rem"} iconId={"fa-file-text-o"} />
						</Link>

						<Link to={"/users"}>
							<Icon size={"1.25rem"} iconId={"fa-users"} />
						</Link>
					</>
				)}
			</HeaderActionsWrapper>
		</ControlPanelWrapper>
	);
};
