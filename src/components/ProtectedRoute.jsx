import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({loggedIn}) => {
    if (!loggedIn) {
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>; // renders the child routes
};

export default ProtectedRoute;