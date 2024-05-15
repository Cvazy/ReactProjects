import { SearchPanelInput } from "../../styled/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
	selectOpenSearchingBlockStatus,
	selectSearchValue,
} from "../../selectors";

function SearchInput() {
	const dispatch = useDispatch();

	const currentSearchVisibilityStatus = useSelector(
		selectOpenSearchingBlockStatus,
	);

	const searchValue = useSelector(selectSearchValue);

	const setOpenSearchingBlock = () => {
		dispatch({
			type: "SET_VISIBLE_SEARCHING",
			payload: !currentSearchVisibilityStatus,
		});
	};

	const setSearchValue = (value) => {
		dispatch({
			type: "SET_SEARCH_VALUE",
			payload: value,
		});
	};

	return (
		<SearchPanelInput
			placeholder={"Поиск по записям"}
			type={"text"}
			name={"to_do_searching"}
			value={searchValue}
			onChange={({ target }) => setSearchValue(target.value)}
			onBlur={setOpenSearchingBlock}
		/>
	);
}

export default SearchInput;
