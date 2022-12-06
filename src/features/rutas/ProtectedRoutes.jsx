import { useContext} from 'react';
import { AuthContext } from 'features';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const { isAuth } = useContext(AuthContext);

    if (isAuth) {
        return children;        
    }

    return <Navigate to={"/Login"} />;

};

export default ProtectedRoutes;