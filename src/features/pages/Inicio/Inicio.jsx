import { useContext } from "react";
import { AuthContext, Banner} from "../../../features";

export const Inicio = () => {
  const { user } = useContext(AuthContext);

  return (<div className="container-fluid text-center m-0 p-0">
    <Banner />
  </div>
  )

}