import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    const userUpdate=(userName,photo,)=>{
        setLoading(true)
       return updateProfile(auth.currentUser,{
        displayName:userName, photoURL:photo
       })
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log("current user",currentUser) 
            setLoading(false)
        });
        return()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        SignIn,
        logOut,
        userUpdate
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;