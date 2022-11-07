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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        console.log("No previous user found");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithGoogle = (pathname) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setTimeout(() => navigate(pathname), 100);
      })
      .catch((error) => {});
  };
  const createUserWithEmail = async (email, password, pathname) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setTimeout(() => navigate(pathname), 100);
      }
    );
  };
  const loginWithEmail = async (email, password, pathname) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setTimeout(() => navigate(pathname || "/"), 100);
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
        return {};
      });
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
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
