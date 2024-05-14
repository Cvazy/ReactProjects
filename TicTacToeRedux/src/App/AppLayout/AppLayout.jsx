import styled from "styled-components";
import InformationContainer from "../../components/Information/InformationContainer/InformationContainer";
import FieldContainer from "../../components/Field/FieldContainer/FieldContainer";
import { store } from "../../store";
import { useStore } from "../../hooks/useStore";

function AppLayout() {
	const MainWrapper = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100vh;
	`;

	const Game = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		width: 50%;
	`;

	const GameTitle = styled.h1`
		font-size: 2.25rem;
		line-height: 2.75rem;
		color: #bf4f74;
		margin: 0;
	`;

	const StartOver = styled.button`
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: papayawhip;
		background-color: #bf4f74;
		border-radius: 0.75rem;
		padding: 0.75rem 1rem;
		width: 100%;

		&:hover {
			opacity: 0.8;
		}
	`;

	const { isGameEnded } = useStore();

	const handlerStartOver = () => {
		store.dispatch({ type: "START_OVER" });
	};

	return (
		<MainWrapper>
			<Game>
				<GameTitle>Tic Tac Toe</GameTitle>

				<InformationContainer />

				{isGameEnded && (
					<StartOver onClick={handlerStartOver}>Start Over</StartOver>
				)}

				<FieldContainer />
			</Game>
		</MainWrapper>
	);
}

export default AppLayout;
