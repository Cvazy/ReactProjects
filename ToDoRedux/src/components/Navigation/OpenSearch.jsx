import React from "react";
import { OpenSearchPanel, OpenSearchPanelImage } from "../../styled/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenSearchingBlockStatus } from "../../selectors";

function OpenSearch() {
	const dispatch = useDispatch();

	const currentSearchVisibilityStatus = useSelector(
		selectOpenSearchingBlockStatus,
	);

	const setOpenSearchingBlock = () => {
		dispatch({
			type: "SET_VISIBLE_SEARCHING",
			payload: !currentSearchVisibilityStatus,
		});
	};

	return (
		<OpenSearchPanel onClick={setOpenSearchingBlock}>
			<OpenSearchPanelImage src={"/assets/images/search.svg"} />
		</OpenSearchPanel>
	);
}

export default OpenSearch;
