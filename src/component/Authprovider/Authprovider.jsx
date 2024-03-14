import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config'

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }
  
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }



  useEffect(() => {
    const unSubmit = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state chigne, currentuser');
      setLoading(false);
      setUser(currentUser)
    })
    return () => {
      unSubmit()
    }
  },[])

  const authInfo = {
    creatUser,
    user,
    loading,
    singInUser,
    logOut,
    googleLogin
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;