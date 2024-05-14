import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectField,
	selectIsDraw,
	selectIsGameEnded,
} from "../../../selectors";
import { setCell } from "../../../actions";

function FieldLayout() {
	const GameWrapper = styled.div`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background-color: #bf4f74;
		border-radius: 1rem;
		width: 100%;
	`;

	const FieldButton = styled.button`
		font-size: 3.5rem;
		line-height: 4.25rem;
		color: papayawhip;
		background-color: #bf4f74;
		padding: 1rem;
		text-transform: uppercase;
		min-height: 100px;

		&:hover {
			background-color: #873952;
		}

		&:first-child {
			border-top-left-radius: 1rem;
		}

		&:nth-child(3) {
			border-top-right-radius: 1rem;
		}

		&:nth-child(7) {
			border-bottom-left-radius: 1rem;
		}

		&:last-child {
			border-bottom-right-radius: 1rem;
		}

		&:disabled {
			cursor: not-allowed;

			&:hover {
				background-color: #bf4f74;
			}
		}
	`;

	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const handlerStartOver = (index) => {
		dispatch(setCell(index));
	};

	return (
		<GameWrapper>
			{field.map((el, index) => {
				return (
					<FieldButton
						key={index}
						onClick={() => handlerStartOver(index)}
						disabled={isGameEnded || isDraw || el !== ""}
					>
						{el}
					</FieldButton>
				);
			})}
		</GameWrapper>
	);
}

export default FieldLayout;
