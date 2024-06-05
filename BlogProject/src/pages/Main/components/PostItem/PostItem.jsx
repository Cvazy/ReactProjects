import PropTypes from "prop-types";
import { Icon } from "../../../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostItemContainer = styled.div`
	width: fit-content;
	height: fit-content;

	& > a {
		display: block;
		width: fit-content;
		height: fit-content;
	}
`;

const PostItemWrapper = styled.div`
	width: 280px;
	border: 1px solid black;
`;

const PostImage = styled.div`
	width: 280px;
	height: 150px;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

const ImagePlug = styled.div`
	width: 280px;
	height: 150px;
	background-color: #405060;
`;

const PostInfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.25rem;
	width: 100%;
	border-top: 1px solid black;
	background-color: white;
	padding: 0.375rem;
	overflow: hidden;
`;

const Title = styled.h4`
	font-size: 1.25rem;
	line-height: 1.5rem;
	color: black;
	font-weight: 500;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
`;

const DopInfoBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	width: 100%;
`;

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: nowrap;

	& p {
		font-size: 1.125rem;
	}
`;

export const PostItem = ({
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<PostItemContainer>
			<Link to={`/post/${id}`}>
				<PostItemWrapper>
					{imageUrl ? (
						<PostImage>
							<img src={imageUrl} alt={title} />
						</PostImage>
					) : (
						<ImagePlug />
					)}

					<PostInfoBlock>
						<Title>{title}</Title>

						<DopInfoBlock>
							<InfoContainer>
								<Icon size={"1.25rem"} iconId={"fa-calendar-o"} />

								<p>{publishedAt}</p>
							</InfoContainer>

							<InfoContainer>
								<Icon size={"1.25rem"} iconId={"fa-comment-o"} />

								<p>{commentsCount}</p>
							</InfoContainer>
						</DopInfoBlock>
					</PostInfoBlock>
				</PostItemWrapper>
			</Link>
		</PostItemContainer>
	);
};

PostItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
