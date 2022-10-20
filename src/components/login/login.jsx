import { useLocation } from "react-router-dom";
import Common from "./common";

const Login = () => {
  const {
    state: { pathname },
  } = useLocation();
  return (
    <>
      <Common pathname={pathname} />
    </>
  );
};

export default Login;
