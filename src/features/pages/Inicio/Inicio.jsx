import { useContext } from "react";
import { AuthContext, Banner} from "../../../features";

export const Inicio = () => {
  const { user } = useContext(AuthContext);

  return (<div className="container-fluid text-center">
    <h1>Bienvenido {user}</h1>
    <Banner />
  </div>
  )

}