import PropTypes from "prop-types";
import { Error } from "../Error/Error";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { ERRORS, PROP_TYPES } from "../../constants";
import { checkAccess } from "../../utils";

export const PrivateContent = ({ serverError = null, access, children }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole)
		? null
		: ERRORS.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	serverError: PROP_TYPES.ERROR,
	access: PropTypes.arrayOf(PROP_TYPES.ROLE).isRequired,
	children: PropTypes.node.isRequired,
};
