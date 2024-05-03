import React, { useState } from "react";
import { Navigation, NavigationWrapper, Title } from "../../styled/Navigation";
import Searching from "../Searching/Searching";
import OpenSearch from "./OpenSearch";

function NavigationBlock() {
	const [openSearchingBlock, setOpenSearchingBlock] = useState(false);

	return (
		<Navigation>
			<NavigationWrapper>
				<Title>To Do Application</Title>

				<OpenSearch
					openSearchingBlock={openSearchingBlock}
					setOpenSearchingBlock={setOpenSearchingBlock}
				/>

				<Searching openSearchingBlock={openSearchingBlock} />
			</NavigationWrapper>
		</Navigation>
	);
}

export default NavigationBlock;
