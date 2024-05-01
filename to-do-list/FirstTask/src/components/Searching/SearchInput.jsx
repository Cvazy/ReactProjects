import React from "react";
import { SearchPanelInput } from "../../styled/Navigation";

function SearchInput(props) {
	return (
		<SearchPanelInput
			placeholder={"Поиск по записям"}
			type={"text"}
			name={"to_do_searching"}
		></SearchPanelInput>
	);
}

export default SearchInput;
