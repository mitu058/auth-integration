import { createUserWithEmailAndPassword } from 'firebase/auth';
import  { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const  name = 'hello context'
    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const AuthInfo = {
       name, creatUser
    }
    return (
        <div>
            <AuthContext.Provider value ={AuthInfo}>
          {/* main part who will access to this contex */}
          {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

/**
 * 1. creat context with null as default
 * 2. creat provider
 * 3. set a default value (AuthInfo)
 * 4.use the auth provider in main.jsx
 * 5.access the children inside the auth provider
 */