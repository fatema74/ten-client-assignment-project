import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config'

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  
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

  useEffect(() => {
    const unSubmit = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state chigne, currentuser');
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
    singInUser
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;