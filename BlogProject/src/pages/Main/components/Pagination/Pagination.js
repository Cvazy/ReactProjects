import PropTypes from "prop-types";
import { MainButton } from "../../../../components";
import styled from "styled-components";

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const PaginationWrapper = styled.div`
	display: flex;
	gap: 0.25rem;
	width: fit-content;
`;

export const Pagination = ({ page, lastPage, setPage }) => {
	return (
		<PaginationContainer>
			<PaginationWrapper>
				<MainButton
					onClick={() => setPage(1)}
					propWidth={"120px"}
					propHeight={"40px"}
					disabledStatus={page === 1}
				>
					В начало
				</MainButton>

				<MainButton
					onClick={() => setPage(page - 1)}
					propWidth={"120px"}
					propHeight={"40px"}
					disabledStatus={page === 1}
				>
					Предыдущая
				</MainButton>

				<MainButton propWidth={"120px"} propHeight={"40px"}>
					Страница: {page}
				</MainButton>

				<MainButton
					onClick={() => setPage(page + 1)}
					propWidth={"120px"}
					propHeight={"40px"}
					disabledStatus={page === lastPage}
				>
					Следующая{" "}
				</MainButton>

				<MainButton
					onClick={() => setPage(lastPage)}
					propWidth={"120px"}
					propHeight={"40px "}
					disabledStatus={page === lastPage}
				>
					В конец
				</MainButton>
			</PaginationWrapper>
		</PaginationContainer>
	);
};

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
