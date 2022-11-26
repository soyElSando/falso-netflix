import { useContext } from "react";
import { AuthContext} from "../../../features";

export const Inicio = () => {
  const { user } = useContext(AuthContext);
  return (
  <h1>
    Bienvenido {user.split("@")[0]}
  </h1>
  )

}