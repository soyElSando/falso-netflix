import { Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar"

export const Layout=() => {
  return (
    <>
      <NavBar />
      <div
       className="container-fluid d-flex align-items-center justify-content-center w-100 m-0 pt-4"
       style={{height:"100vh", zIndex:"-1"}}
       >
      <Outlet />
      </div>
    </>
  );
}
