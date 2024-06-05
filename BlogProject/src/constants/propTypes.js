import PropTypes from "prop-types";
import { ROLE } from "./role";

export const PROP_TYPES = {
	ROLE: PropTypes.oneOf(Object.values(ROLE)),
	ROLE_ELEMENT: PropTypes.shape({
		id: PropTypes.oneOf(Object.values(ROLE)),
		name: PropTypes.string.isRequired,
	}),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		id: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
};
