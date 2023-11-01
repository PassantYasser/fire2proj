import  {React, useEffect, useState, useContext } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
import auth from '../Firebase';
const AuthContext = createContext();

export default function AuthProvider(Children) {
    const [currentUser , setCurrentUser] = useState();
    const [loading , setLoading] = useState(true);
    const signup =(email , passsword)=>{
        createUserWithEmailAndPassword(auth , email , passsword)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth , (user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    return (
    <AuthContext.Provider value={{currentUser , signup}}>
        {!loading && Children}
    </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}