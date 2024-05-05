import React from "react";
import {
	NotFoundSubtitle,
	NotFoundTitle,
	NotFoundWrapper,
} from "../../styled/NotFoundPage";

function NotFoundPage() {
	return (
		<NotFoundWrapper>
			<NotFoundTitle>404</NotFoundTitle>
			<NotFoundSubtitle>Такой страницы не существует</NotFoundSubtitle>
		</NotFoundWrapper>
	);
}

export default NotFoundPage;
