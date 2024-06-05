import { useSelector } from "react-redux";
import {
	selectModalText,
	selectModalIsOpen,
	selectModalConfirmFunc,
	selectModalCancelFunc,
} from "../../selectors";
import { MainButton } from "../MainButton/MainButton";
import styled from "styled-components";

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
`;

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
`;

const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const ModalBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	background-color: white;
	padding: 0.75rem;
	border-radius: 0.25rem;

	& > .modal_title {
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: black;
		text-align: center;
	}

	& > .button_wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: nowrap;
	}
`;

export const Modal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const modalText = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalConfirmFunc);
	const onCancel = useSelector(selectModalCancelFunc);

	if (!isOpen) {
		return null;
	}

	return (
		<ModalContainer>
			<Overlay>
				<ModalWrapper>
					<ModalBlock>
						<h3 className={"modal_title"}>{modalText}</h3>

						<div className={"button_wrapper"}>
							<MainButton
								onClick={onConfirm}
								propWidth={"120px"}
								propHeight={"32px"}
							>
								Да
							</MainButton>

							<MainButton
								onClick={onCancel}
								propWidth={"120px"}
								propHeight={"32px"}
							>
								Отмена
							</MainButton>
						</div>
					</ModalBlock>
				</ModalWrapper>
			</Overlay>
		</ModalContainer>
	);
};
