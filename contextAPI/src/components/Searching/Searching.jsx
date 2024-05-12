import React, { useContext } from "react";
import {
	SearchIcon,
	SearchPanel,
	SearchPanelWrapper,
} from "../../styled/Navigation";
import SearchInput from "./SearchInput";
import { NavigationContext } from "../../context/NavigationContext";

function Searching() {
	const {
		openSearchingBlock,
		setOpenSearchingBlock,
		searchValue,
		setSearchValue,
	} = useContext(NavigationContext);

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
