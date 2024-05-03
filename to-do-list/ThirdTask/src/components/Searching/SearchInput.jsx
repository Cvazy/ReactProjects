import { SearchPanelInput } from "../../styled/Navigation";

function SearchInput({
	searchValue,
	setSearchValue,
	openSearchingBlock,
	setOpenSearchingBlock,
}) {
	return (
		<SearchPanelInput
			placeholder={"Поиск по записям"}
			type={"text"}
			name={"to_do_searching"}
			value={searchValue}
			onChange={({ target }) => setSearchValue(target.value)}
			onBlur={() => setOpenSearchingBlock(!openSearchingBlock)}
		/>
	);
}

export default SearchInput;
