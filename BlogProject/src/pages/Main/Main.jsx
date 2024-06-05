import { useServerRequest } from "../../hooks";
import { useEffect, useMemo, useState } from "react";
import { Icon, MainInput } from "../../components";
import { PostItem, Pagination } from "./components";
import styled from "styled-components";
import { PAGINATION_LIMIT } from "../../constants";
import { debounce } from "./utils";

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	width: 100%;

	& > .not_founded_posts {
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: black;
	}
`;

const InputWrapper = styled.div`
	position: relative;
	width: 335px;

	& > .main_searching {
		padding: 0.25rem 2.5rem 0.25rem 0.5rem;
	}

	& > .search_icon {
		position: absolute;
		top: 7px;
		right: 14px;
	}
`;

const PostContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-grow: 1;
	width: 100%;
`;

const PostsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	width: fit-content;
	height: fit-content;
`;

export const Main = () => {
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [posts, setPosts] = useState([]);
	const [searchingPhrase, setSearchingPhrase] = useState("");
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer("fetchPosts", searchingPhrase, page, PAGINATION_LIMIT).then(
			(postsData) => {
				if (postsData.error) {
					return;
				}

				setPosts(postsData.res.posts);
				setLastPage(postsData.res.lastPage);
			},
		);
	}, [requestServer, page, shouldSearch]);

	const startDelaySearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchingPhrase(target.value);
		startDelaySearch(!shouldSearch);
	};

	return (
		<MainWrapper>
			<InputWrapper>
				<MainInput
					className={"main_searching"}
					placeholder={"Поиск..."}
					onChange={onSearch}
					value={searchingPhrase}
				/>

				<Icon className={"search_icon"} size={"1.25rem"} iconId={"fa-search"} />
			</InputWrapper>

			<PostContainer>
				{posts.length ? (
					<PostsWrapper>
						{posts.map(
							({ id, title, imageUrl, publishedAt, commentsCount }) => (
								<PostItem
									key={id}
									id={id}
									imageUrl={imageUrl}
									title={title}
									publishedAt={publishedAt}
									commentsCount={commentsCount}
								/>
							),
						)}
					</PostsWrapper>
				) : (
					<p className={"not_founded_posts"}>Статьи не найдены</p>
				)}
			</PostContainer>

			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</MainWrapper>
	);
};
