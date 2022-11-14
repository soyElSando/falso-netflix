import { useContext} from 'react';
import { AuthContext } from "../../features";
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
    const { isAuth } = useContext(AuthContext);

    if (isAuth) {
        return <Navigate to={"/Login"} />;
    }

    return children;
}

export default PublicRoutes;