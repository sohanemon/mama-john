import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./user-provider";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useContext(UserContext);
  if (user?.uid) return children;

  return <Navigate state={{ pathname }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
