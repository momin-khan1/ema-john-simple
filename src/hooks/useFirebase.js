import { useState, useEffect } from 'react';
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

 initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut (auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect ( () => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
          return unsubcribe
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;