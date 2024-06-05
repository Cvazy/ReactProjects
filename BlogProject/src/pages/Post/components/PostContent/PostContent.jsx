import { H2, Icon } from "../../../../components";
import styled from "styled-components";
import { SpecialPanel } from "../SpecialPanel/SpecialPanel";
import { useNavigate } from "react-router-dom";
import { PROP_TYPES } from "../../../../constants";

const PostWrapper = styled.div`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& H2 {
		text-align: left;
	}

	& > .post_content {
		white-space: pre-line;
	}
`;

export const PostContent = ({
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();

	return (
		<PostWrapper>
			<img src={imageUrl} alt={title} />

			<H2>{title}</H2>

			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				editButton={
					<Icon
						size={"1.25rem"}
						className={"pointer"}
						iconId={"fa-pencil-square-o"}
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>

			<div className={"post_content"}>{content}</div>
		</PostWrapper>
	);
};

PostContent.propTypes = {
	post: PROP_TYPES.POST.isRequired,
};
