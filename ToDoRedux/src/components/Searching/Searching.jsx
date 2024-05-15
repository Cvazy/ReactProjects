import React from "react";
import {
	SearchIcon,
	SearchPanel,
	SearchPanelWrapper,
} from "../../styled/Navigation";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";
import { selectOpenSearchingBlockStatus } from "../../selectors";

function Searching() {
	const openSearchingBlockStatus = useSelector(selectOpenSearchingBlockStatus);

	return (
		<SearchPanel open={openSearchingBlockStatus}>
			<SearchPanelWrapper>
				<SearchIcon src={"/assets/images/search.svg"}></SearchIcon>

				<SearchInput />
			</SearchPanelWrapper>
		</SearchPanel>
	);
}

export default Searching;
