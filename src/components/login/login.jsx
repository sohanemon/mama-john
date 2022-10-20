import { useLocation } from "react-router-dom";
import Common from "./common";

const Login = () => {
  const location = useLocation();
  const pathname = location?.state?.pathname;
  return (
    <>
      <Common pathname={pathname || "/"} />
    </>
  );
};

export default Login;
