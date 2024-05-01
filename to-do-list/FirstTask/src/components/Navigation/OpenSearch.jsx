import React from "react";
import { OpenSearchPanel, OpenSearchPanelImage } from "../../styled/Navigation";

function OpenSearch({ openSearchingBlock, setOpenSearchingBlock }) {
	return (
		<OpenSearchPanel onClick={() => setOpenSearchingBlock(!openSearchingBlock)}>
			<OpenSearchPanelImage
				src={"/assets/images/search.svg"}
			></OpenSearchPanelImage>
		</OpenSearchPanel>
	);
}

export default OpenSearch;
