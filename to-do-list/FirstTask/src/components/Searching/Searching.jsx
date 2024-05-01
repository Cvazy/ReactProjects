import React from "react";
import {
	SearchIcon,
	SearchPanel,
	SearchPanelWrapper,
} from "../../styled/Navigation";
import SearchInput from "./SearchInput";

function Searching({ openSearchingBlock }) {
	return (
		<SearchPanel open={openSearchingBlock}>
			<SearchPanelWrapper>
				<SearchIcon src={"/assets/images/search.svg"}></SearchIcon>

				<SearchInput />
			</SearchPanelWrapper>
		</SearchPanel>
	);
}

export default Searching;
