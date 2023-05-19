import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSub()
        }
    },[])

    const authInfo = {
        user, loading, createUser, signUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;