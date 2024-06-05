import PropTypes from "prop-types";
import { H2 } from "../H2/H2";
import { UserTableText } from "../../pages/Users/components";
import styled from "styled-components";
import { PROP_TYPES } from "../../constants";

const ErrorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;
`;

export const Error = ({ error }) =>
	error && (
		<ErrorWrapper>
			<H2>Произошла ошибка</H2>

			<UserTableText className={"w-full"} align={"center"}>
				{error}
			</UserTableText>
		</ErrorWrapper>
	);

Error.propTypes = {
	error: PROP_TYPES.ERROR,
};
