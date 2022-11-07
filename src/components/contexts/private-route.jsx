import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./user-provider";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useContext(UserContext);
  if (isLoading)
    return <p className='text-7xl pt-[20%] text-center'>Wait a while</p>;
  if (user?.uid) return children;

  return <Navigate state={{ pathname }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
