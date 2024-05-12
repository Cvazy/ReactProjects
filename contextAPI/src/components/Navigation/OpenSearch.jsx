import React, { useContext } from "react";
import { OpenSearchPanel, OpenSearchPanelImage } from "../../styled/Navigation";
import { NavigationContext } from "../../context/NavigationContext";

function OpenSearch() {
	const { openSearchingBlock, setOpenSearchingBlock } =
		useContext(NavigationContext);

	return (
		<OpenSearchPanel onClick={() => setOpenSearchingBlock(!openSearchingBlock)}>
			<OpenSearchPanelImage src={"/assets/images/search.svg"} />
		</OpenSearchPanel>
	);
}

export default OpenSearch;
