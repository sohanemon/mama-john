import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
        setTimeout(() => navigate("/"), 100);
      })
      .catch((error) => {
        console.log("🚀 > loginWithGoogle > error", error);
      });
  };
  const createUserWithEmail = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setTimeout(() => navigate("/"), 100);
      }
    );
  };
  const loginWithEmail = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setTimeout(() => navigate("/"), 100);
      }
    );
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
    <UserContext.Provider
      value={{
        user,
        loginWithGoogle,
        logOut,
        createUserWithEmail,
        loginWithEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
