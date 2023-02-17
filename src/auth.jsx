import React, {useState ,useEffect} from 'react'
import {auth} from './config'
import {onAuthStateChanged} from 'firebase/auth'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const [current , setCurrent] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setCurrent(user)
            setLoading(false)
        })
    },[])

    if(loading){
        return <p>loading ...</p>;
    }

    return (
        <AuthContext.Provider value={{current}}>
            {children}
        </AuthContext.Provider>
    )

}



