import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null);


// const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("Hello Auth Provider");
    const createUser = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        createUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;