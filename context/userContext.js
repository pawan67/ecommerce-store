import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [page, setPage] = useState("home");
  const [isSearch, setIsSearch] = useState(false);
  const [isSignUp, setSignUp] = useState(true);
  const [alert, setAlert] = useState(false);
  const [ productD, setProductD] = useState(null);
  useEffect(() => {
    const unsub = setLoading(true);
    onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setLoading(false);
    });
    return unsub;
  }, []);

  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  const logOutUser = () => {
    signOut(auth);
  };
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logOutUser,
    forgotPassword,
    signInWithGoogle,
    page,
    setPage,
    isSearch,
    setIsSearch,
    isSignUp,
    setSignUp,
    alert,
    setAlert,
    productD, setProductD
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
