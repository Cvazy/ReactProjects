import { Header, Footer, Modal, Error } from "./components";
import { Authorization, Main, Post, Registration, Users } from "./pages";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setUser } from "./actions";
import { ERRORS } from "./constants";

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1000px;
	min-height: 100%;
	height: max-content;
	background-color: white;
`;

const Page = styled.div`
	display: flex;
	padding: 60px 0;
	width: 100%;
	flex-grow: 1;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem("userData");

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Modal />

			<Header />

			<Page>
				<Routes>
					<Route path={"/"} element={<Main />} />
					<Route path={"/login"} element={<Authorization />} />
					<Route path={"/register"} element={<Registration />} />
					<Route path={"/users"} element={<Users />} />
					<Route path={"/post"} element={<Post />} />
					<Route path={"/post/:postId"} element={<Post />} />
					<Route path={"/post/:postId/edit"} element={<Post />} />
					<Route path={"*"} element={<Error error={ERRORS.PAGE_NOT_FOUND} />} />
				</Routes>
			</Page>

			<Footer />
		</AppColumn>
	);
};
