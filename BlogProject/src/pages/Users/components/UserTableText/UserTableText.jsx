import styled from "styled-components";

export const UserTableText = styled.p`
	font-size: 1.25rem;
	line-height: 1.5rem;
	color: black;
	text-align: ${({ align }) => (align ? align : "left")};
	white-space: nowrap;
	width: 200px;
`;

export const UserTableEllipsisText = styled(UserTableText)`
	overflow: hidden;
	text-overflow: ellipsis;
`;
