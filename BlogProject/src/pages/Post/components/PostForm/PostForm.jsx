import { Icon, MainInput } from "../../../../components";
import styled from "styled-components";
import { SpecialPanel } from "../SpecialPanel/SpecialPanel";
import { useLayoutEffect, useRef, useState } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { savePostAsync } from "../../../../actions";
import { useNavigate } from "react-router-dom";
import { PROP_TYPES } from "../../../../constants";

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;

	& > .post_content {
		min-height: 80px;
		border: 1px solid black;
		border-radius: 0.25rem;
		white-space: pre-line;
	}
`;

export const PostForm = ({
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const navigate = useNavigate();

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [title, imageUrl]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	return (
		<PostWrapper>
			<MainInput
				value={imageUrlValue}
				placeholder={"Изображение..."}
				onChange={({ target }) => setImageUrlValue(target.value)}
			/>

			<MainInput
				value={titleValue}
				placeholder={"Заголовок..."}
				onChange={({ target }) => setTitleValue(target.value)}
			/>

			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				editButton={
					<Icon
						size={"1.25rem"}
						className={"pointer"}
						iconId={"fa-floppy-o"}
						onClick={onSave}
					/>
				}
			/>

			<div
				ref={contentRef}
				className={"post_content"}
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</PostWrapper>
	);
};

PostForm.propTypes = {
	post: PROP_TYPES.POST.isRequired,
};
