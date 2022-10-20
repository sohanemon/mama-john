import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./user-provider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user?.uid) return children;

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
