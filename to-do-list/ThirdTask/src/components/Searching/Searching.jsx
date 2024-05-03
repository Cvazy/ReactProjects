import React from "react";
import {
	SearchIcon,
	SearchPanel,
	SearchPanelWrapper,
} from "../../styled/Navigation";
import SearchInput from "./SearchInput";

function Searching({
	openSearchingBlock,
	setOpenSearchingBlock,
	searchValue,
	setSearchValue,
}) {
	return (
		<SearchPanel open={openSearchingBlock}>
			<SearchPanelWrapper>
				<SearchIcon src={"/assets/images/search.svg"}></SearchIcon>

				<SearchInput
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					openSearchingBlock={openSearchingBlock}
					setOpenSearchingBlock={setOpenSearchingBlock}
				/>
			</SearchPanelWrapper>
		</SearchPanel>
	);
}

export default Searching;
