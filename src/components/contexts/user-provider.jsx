import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/app";
const auth = getAuth(app);

export const UserContext = createContext({});
const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        console.log("No previous user found");
      }
    });

    return () => {};
  }, []);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("🚀 > loginWithGoogle > error", error);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log("🚀 > signOut > error", error);
        return {};
      });
  };

  return (
    <UserContext.Provider value={{ user, loginWithGoogle, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
